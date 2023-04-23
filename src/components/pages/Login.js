import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../../App.css";

import Spinner from "../Spinner";
import Crousel from "../Crousel";
import LoginSignupHome from "./LoginSignupHome";
import study from "../../Images/study.png";
import { Link, useNavigate } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { BsEyeFill } from "react-icons/bs";

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

  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    setLoading(true);
    axios
      .post("https://pran.thefacts.space/api/users/userLogin", {
        username: e.target.email.value,
        password: e.target.password.value,
      })
      .then((res) => {
        if (res.data.msg == "Login Successfully") {
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

    e.preventDefault();
  };

  return (
    <>
      {loading ? <Spinner /> : ""}
      <div className="background-img">
        <div class="top-container">
          <div className="login-container">
            <div className="login-form">
              <h2>Sign In</h2>

              <form onSubmit={submitHandler}>
                <div className="input-container">
                  <input type="email" name="email" placeholder="E-mail" />
                  <IoMdContact size="25px" color="#5B5B5B" />
                </div>

                <div className="input-container">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <BsEyeFill size="25px" color="#5B5B5B" />
                </div>

                <p class="forgot-password">
                  <a>Forgot Password ?</a>
                </p>
                <br />
                <br />

                <div className="login-button">
                  <button className="login-btn">Login</button>
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
    </>
  );
}

export default Login;
