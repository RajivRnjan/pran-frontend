import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TopNavbar from "./TopNavbar";
import LeftNavbar from "./LeftNavbar";
import Spinner from "./Spinner";
import { RxCrossCircled } from "react-icons/rx";
import GoBackBtn from "./GoBackBtn";
import { toast, ToastContainer } from "react-toastify";

function TransactionHistory() {
  const [loading, setLoading] = useState(false);

  const [transactionData, setTransactionData] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    setLoading(true);
    // toast("Your Transaction History!", {
    //   theme: "dark",
    //   autoClose: 2000,
    // });
    axios
      .get("/api/txn/getTxnList", {
        headers: {
          Authorization: "auth " + localStorage.getItem("auth_token"),
        },
      })
      .then((res) => {
        setLoading(false);
        const { data } = res;

        setTransactionData(data.txns);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [reload]);

  const deleteTxn = (id) => {
    console.log(id);
    setLoading(true);
    axios
      .post(
        "/api/txn/deleteTxn",
        {
          id: id,
        },
        {
          headers: {
            Authorization: "auth " + localStorage.getItem("auth_token"),
          },
        }
      )
      .then((res) => {
        
        toast(res.data.msg, {
          theme: "dark",
          autoClose: 2000,
        });
        // if (res.data.msg === "Deleted Successfully") {
          setReload(!reload);
        // }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // UPDATE TXN
  const UpdateTxn = (id) => {
    setLoading(true);

   
    axios
      .post(
        "/api/txn/verifyTxn",
        {
          txnId: id,
          amount: 10,
        },
        {
          headers: {
            Authorization: "auth " + localStorage.getItem("auth_token"),
          },
        }
      )
      .then((res) => {
        // console.log(res.data);
        setLoading(false);
        toast(res.data.msg, {
          theme: "dark",
          autoClose: 2000,
        });
        if(res.data.msg === "Transaction Unsuccessfull"){
          deleteTxn(id);
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
        <div className="TransactionContainer">
          <table>
            <tr className="header">
              <th className="sno">S.No</th>
              <th>Transaction ID</th>
              <th>Date</th>
              <th className="time">Time</th>
              <th className="type">Type</th>
              <th className="amount">Amount</th>
              <th>Status</th>
            </tr>

            {transactionData !== undefined &&
              transactionData.map((item, index) => {
                return (
                  <tr>
                    <td className="sno" key={index + 1}>{index + 1}</td>
                    <td>{item.txnId}</td>
                    <td>{new Date(item.timestamp).toLocaleDateString()}</td>
                    <td className="time">{new Date(item.timestamp).toLocaleTimeString()}</td>
                    <td className="type">{item.type}</td>
                    <td className="amount">{item.amount}</td>
                    <td className="status">

                      
                      {item.status === "Pending" ? (
                        <div className="status-btn">
                          <button
                            className="verify-btn"
                            onClick={() => {
                              UpdateTxn(item.txnId);
                            }}
                          >
                            Update 
                          </button>
                          {/* <button
                            className="cancel-btn"
                            onClick={() => {
                              deleteTxn(item._id);
                            }}
                          >
                            <RxCrossCircled className="cancel-icon" />
                          </button> */}
                        </div>
                      ) : (
                        ""
                      )}
                      {item.status}{" "}
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    </>
  );
}

export default TransactionHistory;
