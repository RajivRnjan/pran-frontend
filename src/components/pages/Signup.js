import React from 'react'
import {Link,useNavigate} from 'react-router-dom';
import LoginSignupHome from './LoginSignupHome';
import '../../App.css';
import Crousel from '../Crousel';
import {BsFillHouseUpFill} from 'react-icons/bs';
import {RiCheckboxCircleFill,RiLockPasswordLine} from 'react-icons/ri'
import {IoMdContact} from 'react-icons/io';
import {MdSmartphone,MdSchool,MdEmail} from 'react-icons/md';




function Signup() {
    const navigate = useNavigate();

    const navigateLogin = ()=>{
       navigate('/login');
    };
  return (
    <>
        <div className="background-img">
            <div className="top-container">
                <div className="signup-container">
                    <div class="signup-form">
                        <h2>Sign Up</h2>
                        <form>
                            <div className="input-container">
                        <IoMdContact size="25px" color="#5B5B5B"/><input type="text" placeholder='Enter student name' name="name" />
                        </div>

                        <div className="input-container">
                          <MdSmartphone size="25px" color="#5B5B5B"/>  <input type="number" placeholder='Enter Mobile No' name="number" />
                            </div>
                            
                            <div className="input-container">
                            <MdEmail size="25px" color="#5B5B5B"/><input type="email" placeholder='Enter Email-ID'  name="email" />
                            </div>                                           

                             <div className="input-container">                                          
                             <RiLockPasswordLine size="25px" color="#5B5B5B"/><input type="password" placeholder='Password' name="password" />
                            </div>                                           

                            <div className="input-container">
                            <RiLockPasswordLine size="25px" color="#5B5B5B"/><input type="password" placeholder='Confirm Password'  name="cpassword" /> 
                            </div>                                           
                            
                            <div className="selectElement">
                            <div className="input-container select-college">                                         
                            <BsFillHouseUpFill size="20px" color="#5B5B5B"/>
                            <select className='clg'>
                                <option>Select Colleges</option>
                                <option>VBU</option>
                                <option>St. colomba's</option>
                            </select>
                            </div>

                            <div className="course-sem">
                                
                            <div className="input-container select-courses">
                                <MdSchool  size="25px" color="#5B5B5B"/>
                            <select className='clg'>
                                <option>Courses</option>
                                <option>BCA</option>
                                <option>MCA</option>
                            </select>
                            </div>
                            

                            <div className="input-container select-semester">
                                <MdSchool size="25px" color="#5B5B5B"/>

                            <select className='clg'>
                                <option>Semester</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                            </div>
                            </div>
                            </div>    

                            <div className="checkbox">
                            <div className="checkbox-icon"><RiCheckboxCircleFill/></div>
                            <label>Agree With Terms &#38; Conditions</label> 
                            </div> <br/>                            
                            <div className="register-button">
                            <button className='register-btn'>Register</button>
                            </div>
                        </form>
                        <p className="signup-footer">Already have an account ? <Link to="/login">Login Here</Link></p>
                    </div>
                </div>
                <div className="signup-desc">
                    <h2>WELCOME</h2>
                    <p>Make your study easy with PRAN.</p>

                    <div className="button">
                    <button className="get-started">Get Started</button>
                    <button onClick={navigateLogin} className="sign-in">Sign In</button>
                    </div>

                </div>
            </div>
      </div>

      
     <LoginSignupHome/>
     <Crousel/>
           
    </>
  )
}

export default Signup