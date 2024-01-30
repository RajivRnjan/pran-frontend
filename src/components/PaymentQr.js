import React, { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import TopNavbar from "../components/TopNavbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";

import { useNavigate } from "react-router-dom";
import LeftNavbar from "../components/LeftNavbar";
import { BsCheck2All } from "react-icons/bs";
import GoBackBtn from "./GoBackBtn";
import { toast, ToastContainer } from "react-toastify";
function PaymentQr() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = () => {
      if (!localStorage.getItem("auth_token")) {
        navigate("/login");
      }
    };
    checkLogin();
  });
  // GET QR LINK
  const [link, setLink] = useState("");
  const [txnId, setTxnId] = useState("");
  useEffect(() => {
    toast("After Successfull Payment Click on Verify", {
      theme: "dark",
      autoClose: 2000,
    });
    setLoading(true);
    axios
      .get(
        "/api/txn/getQRLink",

        {
          headers: {
            Authorization: "auth " + localStorage.getItem("auth_token"),
          },
        }
      )
      .then((res) => {
        const { data } = res;
        setLoading(false);
        setLink(data.link);
        setTxnId(data.txnId);
        // console.log(data)
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  //Verify TXN
  // const interval = setInterval(()=>{
  //   verfiyTxn()
  // },10000)

  const verfiyTxn = () => {
    setLoading(true);
    toast("Please Wait... Do not Refresh or Close!");

    axios
      .post(
        "/api/txn/verifyTxn",
        {
          txnId: txnId,
          amount: 10,
        },
        {
          headers: {
            Authorization: "auth " + localStorage.getItem("auth_token"),
          },
        }
      )
      .then((res) => {
        // console.log(res);
        setLoading(false);
        alert(res.data.msg);
        toast(res.data.msg, {
          theme: "dark",
          autoClose: 2000,
        });
        if (res.data.msg === "Plan renewed for 1 Month") {
          navigate("/transaction");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <TopNavbar />
      {loading ? <Spinner /> : ""}
      {/* <ToastContainer /> */}

      <LeftNavbar />
      <div className="HomeContainer">
        <Link to="/myAccount">
          <GoBackBtn />
        </Link>
        <div className="PaymentQRContainer">
          <div className="Top">
            <h2>Scan & Pay or Take a Screenshot of QR</h2>
            <h3>You can Pay with any UPI Application</h3>
            <br />
            <div className="QR">
              <QRCodeCanvas value={link} />
            </div>
          </div>
          <div className="Middle">
            <h5 className="instruction">Instructions :- </h5>
            <tr>
              <td>
                <BsCheck2All />
              </td>
              <td>
                After payment click on Verify Button.{" "}
                {/* <Link to="/transaction">
                  <span style={{ color: "red" }}>transaction</span>{" "}
                </Link> */}
               
              </td>
            </tr>
            {/* <tr>
              <td>
                <BsCheck2All />
              </td>
              <td>Please cancel the unnecessary pending transactions.</td>
            </tr> */}
            <tr>
              <td>
                <BsCheck2All />
              </td>
              <td>
                By clicking the Verify button, I agree that i will not ask for
                any refunds.
              </td>
            </tr>
            <tr>
              <td>
                <BsCheck2All />
              </td>
              <td>
                We are collecting payment for maintaining the application.{" "}
              </td>
            </tr>
          </div>

          <div className="Bottom">
            <button onClick={verfiyTxn}>Verify</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentQr;
