import React from 'react';
import '../../App.css';
import Crousel from '../Crousel';
import LoginSignupHome from './LoginSignupHome';
import study from '../../Images/study.png';
import {Link,useNavigate} from 'react-router-dom';
import {IoMdContact} from 'react-icons/io';
import {BsEyeFill} from 'react-icons/bs';



function Login() {
  const navigate = useNavigate();

  const navigateToSignup = ()=>{
    navigate('/');
  };


  // const submitHandler=(e)=>{
  //       console.log();
  //       console.log(e.target.password.value);

  //       axios.post("httpdfsdf",{
  //         email:e.target.email.value,
  //         password:e.target.password.value
  //       }).then((res)=>{
  //           console.log(res);

  //       }).catch((err)=>{
  //         console.log(err);
  //       })
  //     e.preventDefault()
  // }


  return (
    <>
    <div className="background-img">
    <div class="top-container">
      <div className="login-container">
       <div className="login-form">
        <h2>Sign In</h2>

        {/* <form onSubmit={submitHandler}> */}
        <form >

        <div className="input-container">
        <input type="email" name="email" placeholder='E-mail'/><IoMdContact size="25px" color="#5B5B5B"/>
        </div>

        <div className="input-container">
        <input type="password" name="password" placeholder='Password'/><BsEyeFill size="25px" color="#5B5B5B"/>
        </div>

        <p class="forgot-password"><a>Forgot Password ?</a></p><br/><br/>

        <div className='login-button'>
          <button className='login-btn'>Login</button>
       </div><br/>
       </form>

       <p class="login-footer">Don't have an Account. <Link to= "/" >Click Here</Link></p><br/>

      </div>
    </div>

      <div className="login-desc">
        <img src={study} alt="study" width="200px"/>
        <h2> # All At One Place </h2>
        <p>We Provide good source of material to Study</p><br/>

        <div className="button">
                    <button onClick = {navigateToSignup} className="sign-up">Sign Up</button>
                    <button className="get-started">Get Started</button>
                    </div>
      </div>
      
    </div>
    </div>

    <LoginSignupHome/>
    <Crousel/>
    </>
  )
}

export default Login