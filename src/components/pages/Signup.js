import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useFetcher, useNavigate } from "react-router-dom";

import Navbar from "../Navbar";
import Footer from "../Footer";
import Spinner from "../Spinner";
import LoginSignupHome from "./LoginSignupHome";
import "../../App.css";
import Crousel from "../Crousel";
import { BsFillHouseUpFill } from "react-icons/bs";
import { RiCheckboxCircleFill, RiLockPasswordLine } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { MdSmartphone, MdSchool, MdEmail } from "react-icons/md";
import { toast,ToastContainer } from "react-toastify";
import {Helmet} from "react-helmet";
function Signup() {

  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };

  
  const numberHandler = (event) => {
    event.preventDefault();
    let number = event.target.value;
    let numberStr = number.toString();

    if (numberStr.length < 10 || number < 6000000000 || number >= 9999999999) {
      document.querySelector("#number").style.borderBottom = "1px solid red";
     
    } else {
     
      document.querySelector("#number").style.borderBottom =
        "1px solid #5B5B5B";
       
    }
    
  };


  const emailHandler = (event) => {

    event.preventDefault();
    let email = event.target.value;
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

  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    toast("Please Wait...",{
      theme:'dark',
      autoClose:2000,
    })
    setLoading(true);
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const cpassword = event.target.cpassword.value;
    const college = event.target.college.value;
    const course = event.target.course.value;
    const sem = event.target.sem.value;

    if ((password === cpassword) && (college !== "select" )){
      axios
        .post("/api/user/signup", {
          name,
          number,
          email,
          password,
          college,
          course,
          sem,
        })
        .then((response) => {
          console.log(response);
          toast(response.data.msg,{
            theme:'dark',
            autoClose:2000,
          })
          alert(response.data.msg);
          setLoading(false);
          navigateLogin();
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      toast("Incorrect Input")
      // alert("Incorrect Input");
      setLoading(false);
    }
  };
// GET College List
const [colleges,setColleges]= useState([]);
useEffect(()=>{
  toast("Note : Incorrect Email user may Face Some issues later..",{
    theme:'dark',
    autoClose:2000,
  })

  setLoading(true);

  axios.
  get("/api/college/getColleges")
  .then((response)=>{
    const {data} = response;
    setColleges(data.colleges);
    setLoading(false);
  })
},[])
  // GET Course Sem List
  const [courses, setCourses] = useState([]);
  const [sem, setSem] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .get("/api/course/courseList")
      .then((response) => {
        const { data } = response;

        setCourses(data.courses);
        setLoading(false);
        // console.log(data.courses)
      });
  }, []);

  const [selectedCourse, setSelectedCourse] = useState("BCA");
  const selectCourseHandle = (e) => {
    e.preventDefault();
    setSelectedCourse(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <>
    <Helmet>
				<title>PRAN - Signup</title>
			</Helmet>
    <Navbar/>
      {loading ? <Spinner /> : ""}
      {/* <ToastContainer/> */}
      <div className="background-img">
        <div className="top-container">
          <div className="signup-container">
            <div className="signup-form">
              <h2>Sign Up</h2>

              <form onSubmit={handleSubmit}>
                <div className="input-container">
                  <IoMdContact size="25px" color="#5B5B5B" />
                  <input
                    type="text"
                    placeholder="Enter student name"
                    name="name"
                    required
                  />
                </div>
                <div className="input-container" id="number">
                  <MdSmartphone size="25px" color="#5B5B5B" />{" "}
                  <input
                    type="number" min="6000000000" max="9999999999"
                    placeholder="Enter Mobile No"
                    name="number"
                    pattern="[6789][0-9]{9}"
                    title="Please enter valid phone number"
                    required
                    onChange={numberHandler}
                  />
                </div>
                <div className="input-container" id="email">
                  <MdEmail size="25px" color="#5B5B5B" />
                  <input
                    type="email"
                    placeholder="Enter Email-ID"
                    name="email"
                    required
                    onChange={emailHandler}
                  />
                </div>
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
                </div>
                <div className="input-container" id="cpassword">
                  <RiLockPasswordLine size="25px" color="#5B5B5B" />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="cpassword"
                    required
                    onChange={cpasswordHandler}
                  />
                </div>
                <div className="selectElement">
                  <div className="input-container select-college">
                    <BsFillHouseUpFill size="20px" color="#5B5B5B" />
                    <select className="clg" name="college" required>
                      <option value="select">Select College</option>
                    {colleges.map((college) => {
                          return (
                            <option value={college.name}>
                              {college.name}
                            </option>
                          );
                        })}
                    
                      
                    </select>
                  </div>

                  <div className="course-sem">
                    <div className="input-container select-courses">
                      <MdSchool size="25px" color="#5B5B5B" />
                      <select
                        className="clg"
                        name="course"
                        value={selectedCourse}
                        required
                        onChange={selectCourseHandle}
                      >
                        {courses.map((course) => {
                          // console.log(course.course)
                          return (
                            <option value={course.course}>
                              {course.course}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="input-container select-semester">
                      <MdSchool size="25px" color="#5B5B5B" />

                      <select className="clg" name="sem" required>
                        {courses.map((course) => {
                          if (course.course === selectedCourse) {
                            return course.sem.map((sem) => {
                              // console.log(sem);

                              return <option value={sem}>{sem}</option>;
                            });
                          }
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="checkbox">
                  <div className="checkbox-icon">
                    <RiCheckboxCircleFill />
                  </div>
                  <label>Agree With Terms &#38; Conditions</label>
                </div>{" "}
                <br />
                <div className="register-button">
                  <button
                    className="register-btn"
                    name="register"
                    value="Register"
                  >
                    Register
                  </button>
                </div>
              </form>
              <p className="signup-footer">
                Already have an account ? <Link to="/login">Login Here</Link>
              </p>
            </div>
          </div>
          <div className="signup-desc">
            <h2>WELCOME</h2>
            <p>Make your study easy with PRAN.</p>

            <div className="button">
              <button className="get-started">Get Started</button>
              <button onClick={navigateLogin} className="sign-in">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      <LoginSignupHome />
      <Crousel   />
      <Footer/>
    </>
  );
}

export default Signup;
