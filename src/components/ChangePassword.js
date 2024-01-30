import React, { useState } from 'react'
import Spinner from "./Spinner";
import {  RiLockPasswordLine } from "react-icons/ri";
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify';
function ChangePassword() {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const passwordHandler = (event) => {
        event.preventDefault();
        let password = document.querySelector("form").password.value;
        if (password.length <= 5) {
          document.querySelector("#password").style.borderBottom = "1px solid red";
        } else {
          document.querySelector("#password").style.borderBottom =
            "1px solid #5B5B5B";
        }
        if (password.length === 0) {
          document.querySelector("#password").style.borderBottom =
            "1px solid #5B5B5B";
        }
      };
    
      const cpasswordHandler = (event) => {
        let password = document.querySelector("form").password.value;
        event.preventDefault();
        let cpassword = document.querySelector("form").cpassword.value;
    
        if (password !== cpassword) {
          document.querySelector("#cpassword").style.borderBottom = "1px solid red";
        } else {
          document.querySelector("#cpassword").style.borderBottom =
            "1px solid #5B5B5B";
        }
        if (cpassword.length === 0) {
          document.querySelector("#cpassword").style.borderBottom =
            "1px solid #5B5B5B";
        }
      };

      
    const changePasswordHandler = (e)=>{
      toast("Please Wait....",{
        theme:'dark',
        autoClose:2000,
      })
        e.preventDefault();
        setLoading(true);

        axios.post("/api/user/forgetChangePassword",{
            forgotToken : localStorage.getItem("forgotToken"),
            password : e.target.password.value,
        })
        .then((res)=>{
            // console.log(res)
            toast(res.data.msg,{
              theme:'dark',
              autoClose:2000,
            })
            // alert(res.data.msg)
            setLoading(false)
            if(res.data.msg === "Password Changed"){
            navigate("/login")
            }
        })
        .catch((err)=>{
            console.log(err)
            setLoading(false)
        })
    }

  return (
    <>
    {loading ? <Spinner /> : ""}
    {/* <ToastContainer/> */}
      <div className="forgot-container">
        <div className="password-form ">
          <h2>Change Password</h2>

          <form onSubmit={changePasswordHandler}>
          <div className="input-container" id="password">
                  <RiLockPasswordLine size="25px" color="#5B5B5B" />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    minLength="6"
                    required
                    onChange={passwordHandler}
                  />
                </div><br/>
                <div className="input-container" id="cpassword">
                  <RiLockPasswordLine size="25px" color="#5B5B5B" />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="cpassword"
                    minLength="6"
                    required
                    onChange={cpasswordHandler}
                  />
                </div><br/><br/>
            

           

            <div className="login-button">
              <button className="login-btn" id="login-btn">
                Change
              </button>
            </div>
            <br />
          </form>

          {/* <p className="login-footer">
            Want to Login. <Link to="/login">Click Here</Link>
          </p>
          <br /> */}
        </div>
      </div>
    
    </>
  )
}

export default ChangePassword