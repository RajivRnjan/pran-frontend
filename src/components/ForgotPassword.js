import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";

import { IoMdContact } from "react-icons/io";
import {toast, ToastContainer } from "react-toastify";

function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate("/Signup");
  };

  const checkLogin = () => {
    // toast("Enter Correct Email")
    if (localStorage.getItem("auth_token")) {
      navigate("/");
    }
  };
  checkLogin();

  const [email, setEmail] = useState("");
  const emailHandle = (event) => {
    event.preventDefault();
    let email = event.target.value;
    setEmail(event.target.value);
    let splitEmail = email.split("@");

    if (splitEmail[1] !== "gmail.com") {
      document.querySelector("#email").style.borderBottom = "1px solid red";
    } else {
      document.querySelector("#email").style.borderBottom = "1px solid #5B5B5B";
    }
    if (email.length === 0) {
      document.querySelector("#email").style.borderBottom = "1px solid #5B5B5B";
    }
  };

  //GET OTP
  const [token, setToken] = useState("");
  const getOtp = (e) => {
    setLoading(true);
    // toast("Please Wait...",{
    //   theme:'dark',
    //   autoClose:2000,
    // })

    axios
      .post(
        "/api/user/forgetSendMail",
        { email },
        setLoading(true)
      )
      .then((res) => {
        
        setLoading(false);
        alert(res.data.msg);
        // toast(res.data.msg,{
        //   theme:'dark',
        //   autoClose:2000,
        // });
        setToken(res.data.forgotToken);
        localStorage.setItem("forgotToken",res.data.forgotToken)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false);
      });
  };

  //Verify OTP
  const vefifyHandler = (e)=>{
    e.preventDefault();
    setLoading(true);
    // toast("Please Wait...",{
    //   theme:'dark',
    //   autoClose:2000,
    // })

    axios.post("/api/user/verifyForgotOTP",{
      forgotToken : token,
      OTP : e.target.otp.value,
    })
    .then((res)=>{
      setLoading(false);
      alert(res.data.msg)
      // toast(res.data.msg,{
      //   theme:'dark',
      //   autoClose:2000,
      // });
      if(res.data.msg === "OTP verified"){
        navigate("/changePassword")
      }
    })
    .catch((err)=>{
      console.log(err)
      setLoading(false);
    })
  }
  

  return (
    <>
      {loading ? <Spinner /> : ""}
      {/* <ToastContainer/> */}
      <div className="forgot-container">
        <div className="password-form ">
          <h2>Forgot Password</h2>

          <form onSubmit={vefifyHandler}>
            <div className="input-container" id="email">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                onChange={emailHandle}
              />
              <IoMdContact size="25px" color="#5B5B5B" />
            </div>

            <div className="input-container" id="password" required>
              <input
                type="number"
                name="otp"
                placeholder="Enter OTP Here"
                required
              />
            </div>

            <p className="forgot-password">
              <p onClick={getOtp}>Get OTP</p>
            </p>
            <br />
            <br />

            <div className="login-button">
              <button className="login-btn" id="login-btn">
                Verify
              </button>
            </div>
            <br />
          </form>

          <p className="login-footer">
            Want to Login. <Link to="/login">Click Here</Link>
          </p>
          <br />
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
