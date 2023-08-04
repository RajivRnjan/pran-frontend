import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../../App.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Spinner from "../Spinner";
import Crousel from "../Crousel";
import LoginSignupHome from "./LoginSignupHome";
import study from "../../Images/study.png";
import { Link, useNavigate } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { BsEyeFill } from "react-icons/bs";
import {RiEyeCloseFill} from "react-icons/ri"

function Login() {
  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate("/Signup");
  };

  const checkLogin = () => {
    if (localStorage.getItem("auth_token")) {
      navigate("/home");
    }
  };
  checkLogin();


  const emailHandle = (event) => {
    event.preventDefault();
    let email = event.target.value;
    let splitEmail = email.split("@");

    if (splitEmail[1] !== "gmail.com") {
      document.querySelector("#email").style.borderBottom = "1px solid red";
    } else {
      document.querySelector("#email").style.borderBottom = "1px solid #5B5B5B";
    }
    if(email.length === 0){
      document.querySelector("#email").style.borderBottom = "1px solid #5B5B5B";
    }
    
  }




  const [ passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const passwordHandler = (event) =>{
    event.preventDefault();
   
  
  setPasswordInput(event.target.value);

// validation password
  let password = document.querySelector("form").password.value;
  if(password.length <= 5){
    document.querySelector("#password").style.borderBottom = "1px solid red";
    document.querySelector(".login-btn").style.backgroundColor = "#55bae2";
    document.querySelector(".login-btn").style.cursor = "none";
    document.getElementById("login-btn").setAttribute("disabled","true");
  }else{
    document.querySelector("#password").style.borderBottom = "1px solid #5B5B5B";
    document.querySelector(".login-btn").style.backgroundColor = "#00ADEF";
    document.querySelector(".login-btn").style.cursor = "pointer";
    document.getElementById("login-btn").removeAttribute("disabled");
  }
  if(password.length === 0){
    document.querySelector("#password").style.borderBottom = "1px solid #5B5B5B";
    document.querySelector(".login-btn").style.backgroundColor = "#00ADEF";
    document.getElementById("login-btn").setAttribute("disabled","true");
      }
}

 

 const togglePassword = ()=>{
  if(passwordType === "password"){
    setPasswordType("text")
  }else{
  setPasswordType("password");
  }

 }

  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    
    setLoading(true);
    axios
      .post("https://pran-app-backend.onrender.com/api/user/login", {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((res) => {
        if (res.data.msg === "Login Successfull!") {
          localStorage.setItem("auth_token", res.data.auth_token);
          setLoading(false);
          checkLogin();
        } else {
          setLoading(false);
          alert(res.data.msg);
        }

       
      })
      .catch((err) => {
        setLoading(false);
        alert("Something Went Wrong...Try Again");
      });
  };

  return (
    <>
      <Navbar />
      {loading ? <Spinner /> : ""}
    
      <div className="background-img">
        <div className="top-container">
          <div className="login-container">
            <div className="login-form">
              <h2>Sign In</h2>

              <form onSubmit={submitHandler}>
                <div className="input-container" id="email">
                  <input type="email" name="email" placeholder="E-mail" required onChange={emailHandle} />
                  <IoMdContact size="25px" color="#5B5B5B" />
                </div>

                <div className="input-container" id="password" required>
                  <input
                    type={passwordType}
                    name="password"
                    value = {passwordInput}
                    placeholder="Password"
                    onChange={passwordHandler}
                    
                  />
                  <span onClick={togglePassword}>
                  {passwordType === "password" ? < RiEyeCloseFill size="25px" color="#5B5B5B"  /> : <BsEyeFill size="25px" color="#5B5B5B"/>}
                  </span>
                </div>

                <p className="forgot-password">
                  <a>Forgot Password ?</a>
                </p>
                <br />
                <br />

                <div className="login-button">
                  <button className="login-btn" id="login-btn">Login</button>
                </div>
                <br />
              </form>

              <p className="login-footer">
                Don't have an Account. <Link to="/Signup">Click Here</Link>
              </p>
              <br />
            </div>
          </div>

          <div className="login-desc">
            <img src={study} alt="study" width="200px" />
            <h2> # All At One Place </h2>
            <p>We Provide good source of material to Study</p>
            <br />

            <div className="button">
              <button onClick={navigateToSignup} className="sign-up">
                Sign Up
              </button>
              <button className="get-started">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <LoginSignupHome />
      <Crousel />
      <Footer/>
    </>
  );
}

export default Login;
