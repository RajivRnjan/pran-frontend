import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from "react-helmet";



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
import {BsEyeSlashFill} from "react-icons/bs"

function Login() {
  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate("/Signup");
  };

  const checkLogin = () => {

    if (localStorage.getItem("auth_token")) {
      navigate("/");
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
    toast("Please Wait....",{
      theme:'dark',
      autoClose:2000,
    })
    e.preventDefault();
   

    
    setLoading(true);
    axios
      .post("/api/user/login", {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((res) => {
        // console.log(res.data.msg)
        // console.log(res.data.msg.search("Login Successfull"))
        if (res.data.msg.search("Login Successfull") !== -1) {
          localStorage.setItem("auth_token", res.data.token);
          setLoading(false);
          // console.log(localStorage)
          checkLogin();
        } else {
          setLoading(false);
         
           toast(res.data.msg,{
            theme:'dark',
            autoClose:2000,
          });
          // alert(res.data.msg);
        }

       
      })
      .catch((err) => {
        setLoading(false);
        toast("Something Went Wrong...Try Again",{
          theme:'dark',
          autoClose:2000,
        })
       
      });
  };

  return (
		<>
			<Helmet>
				<title>PRAN - Login</title>
			</Helmet>
			<Navbar />

			{loading ? <Spinner /> : ""}
			<ToastContainer />

			<div className="background-img">
				<div className="top-container">
					<div className="login-container">
						<div className="login-form">
							<h2>Sign In</h2>

							<form onSubmit={submitHandler}>
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
										type={passwordType}
										name="password"
										value={passwordInput}
										placeholder="Password"
										onChange={passwordHandler}
									/>
									<span onClick={togglePassword}>
										{passwordType === "password" ? (
											<BsEyeSlashFill size="22px" color="#5B5B5B" />
										) : (
											<BsEyeFill size="22px" color="#5B5B5B" />
										)}
									</span>
								</div>

								<p className="forgot-password">
									<Link to="/forgot">Forgot Password ?</Link>
								</p>
								<br />
								<br />

								<div className="login-button">
									<button className="login-btn" id="login-btn">
										Login
									</button>
								</div>
								<br />
							</form>

							<p className="login-footer">
								Don't have an Account. <Link to="/Signup">Click Here</Link>
							</p>
							<p
								style={{ color: "#42FF00", paddingLeft: 20, paddingRight: 20 }}
							>
								Your Old Login Details are no more. So Kindly request to create
								Fresh Account
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
			<Footer />
		</>
	);
}

export default Login;
