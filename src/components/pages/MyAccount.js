import React from "react";
import {  ToastContainer, toast } from 'react-toastify';

import Spinner from "../../components/Spinner";
import LeftNavbar from "../../components/LeftNavbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.svg";
import profileImg from "../../Images/photo.png";
import { MdPrivacyTip } from "react-icons/md";
import {
  MdCurrencyRupee,
  MdShare,
  MdLiveHelp,
  MdAssignmentLate,
} from "react-icons/md";
import { FaSearch, FaLock, FaRecycle } from "react-icons/fa";
import avtar from "../../Images/avtar.png";
import { Helmet } from "react-helmet";

import { useEffect, useState } from "react";

function MyAccount() {
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const gotoTopWindow = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const checkLogin = () => {
      if (!localStorage.getItem("auth_token")) {
        navigate("/login");
      }
    };
    checkLogin();
  });

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setLoading(true);

    axios
      .get("/api/course/courseList")
      .then((response) => {
        const { data } = response;
        setCourses(data.courses);
        setLoading(false);
      });
  }, []);

  //GET CURRENT COURSE SEM
  const [current_sem, setCurrent_sem] = useState("");
  const [dbCourse, setDbCourse] = useState("");
  useEffect(() => {
    setLoading(true);

    axios
      .post(
        "/api/user/userData",
        {},
        {
          headers: {
            Authorization: "auth " + localStorage.getItem("auth_token"),
          },
        }
      )
      .then((response) => {
        const { data } = response;
        setLoading(false);
        setDbCourse(data.user.course);
        setCurrent_sem(data.user.sem);
        toast("Hello " + data.user.name + " !",{
          theme:'dark',
          autoClose:2000,
        })
        if(data.expiry==0){
          toast("Plan Expired",{
            theme:'dark',
            autoClose:2000,
          })
        }

        // console.log(dbCourse);
      })
      .catch((err) => {
        console.log(err)
        setLoading(false);
      });
  }, []);

  // UPDATEA COURSE API
  const [selectedCourse, setSelectedCourse] = useState("");

  const selectCourseHandle = (e) => {
    e.preventDefault();
    setSelectedCourse(e.target.value);
    // console.log(e.target.value);
    toast("Please wait....",{
      theme:'dark',
      autoClose:2000,
    })

    setLoading(true);
    axios
      .post(
        "/api/user/updateCourse",
        { course: e.target.value },
        {
          headers: {
            Authorization: "auth " + localStorage.getItem("auth_token"),
          },
        }
      )
      .then((response) => {
        setLoading(false);
        // console.log(selectedCourse);
        setLoading(false);

        const { data } = response;
        if (data.msg === "Updated Successfully") {
          setSelectedCourse(e.target.value);
          setLoading(true);
          window.location.reload();
        }
        console.log(selectedCourse);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err)
      });
  };

  //UPDATE SEM API

  const [selectedSem, setSelectedSem] = useState("");
  const selectSemHandler = (e) => {
    e.preventDefault();
    setSelectedSem(e.target.value);
    setLoading(true);
    toast("Please Wait....",{
      theme:'dark',
      autoClose:2000,
    })


    axios
      .post(
        "/api/user/updateSem",
        { sem: e.target.value },
        {
          headers: {
            Authorization: "auth " + localStorage.getItem("auth_token"),
          },
        }
      )
      .then((response) => {
        setLoading(false);
        // console.log(selectedCourse);
        const { data } = response;
        if (data.msg === "Updated Successfully") {
          window.location.reload();
          setLoading(true);
        }
        // console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err)
      });
  };

  const navigate = useNavigate();
 
  const [name, setName] = useState("");
 
  const [plan, setPlan] = useState("");
  const [expiry, setExpiry] = useState("");

  useEffect(() => {
    setLoading(true);
   
    axios
      .post(
        "/api/user/userData",
        {},
        {
          headers: {
            Authorization: "auth " + localStorage.getItem("auth_token"),
          },
        }
      )
      .then((response) => {
        const { data } = response;
        setLoading(false);
        
        // console.log(data.expiry)
        setName(data.user.name);
        
        setPlan(data.user.plan);

        setExpiry(data.user.Expiry);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
 
  return (
		<>
			<Helmet>
				<title>PRAN - Account</title>
			</Helmet>
			{/* TOP NAVBAR */}
			<nav>
				<div id="navbar">
					<div className="NavbarContainer">
						<div className="nav-left">
							<Link to="/">
								<div>
									<img src={logo} className="nav-logo" alt="logo" />
								</div>
							</Link>
						</div>
						<div className="nav-middle">
							<div className="search">
								<div>
									<input
										type="text"
										placeholder="Search subject notes,video here"
									/>
								</div>
								<div className="search-icon">
									<FaSearch />
								</div>
							</div>
						</div>
						<div className="nav-right">
							<div className="CourseSelect">
								<select
									name="course"
									onChange={selectCourseHandle}
									value={selectedCourse}
								>
									<option value={dbCourse}>{dbCourse}</option>
									{courses.map((course) => {
										return (
											<option value={course.course}>{course.course}</option>
										);
									})}
								</select>
							</div>
							<div className="SemSelect">
								<select
									name="sem"
									onChange={selectSemHandler}
									value={selectedSem}
								>
									<option value={current_sem}>{current_sem}</option>
									{courses.map((course) => {
										if (course.course == dbCourse) {
											// console.log(course.sem)
											return course.sem.map((sem) => {
												return <option value={sem}>{sem}</option>;
											});
										}
									})}
								</select>
							</div>
							<div className="avtar">
								<Link to="/myAccount">
									<img src={avtar} alt="avtar" className="avtar-img" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
			{/* TOP NAVBAR */}
			{loading ? <Spinner /> : ""}
			{/* <ToastContainer/> */}
			<LeftNavbar />

			<div className="MyAccountContainer">
				<h2 data-aos="fade-up">My Account</h2>
				<div className="container">
					<div className="Top">
						<div className="TopLeft">
							<div className="Img">
								<img src={profileImg} alt="img" data-aos="fade-up" />
							</div>
							<div className="Desc">
								<h4 data-aos="fade-up">{name}</h4>
								<div>
									<p data-aos="fade-up">
										Subscription : <span className="plan">{plan}</span>
									</p>
									<p data-aos="fade-up">
										Active Till : {new Date(expiry).toDateString()}{" "}
									</p>
								</div>
								<br />
								<Link to="/myProfile">
									<button data-aos="fade-up">View Profile</button>
								</Link>
							</div>
						</div>
						<div className="TopRight">
							<span>
								<FaRecycle />
							</span>
							<span>
								<Link to="/paymentQr">
									<button data-aos="fade-up">RENEW</button>
								</Link>
							</span>
						</div>
					</div>

					<div className="BottomContainer">
						<div className="Item">
							<span>
								<MdCurrencyRupee />
							</span>
							<span>
								<Link to="/transaction">Transaction History</Link>
							</span>
						</div>
						<div className="Item">
							<span>
								<FaLock />
							</span>
							<span>
								<Link to="/forgot">Change Password</Link>
							</span>
						</div>
						<div className="Item">
							<span>
								<MdPrivacyTip />
							</span>
							<span>
								<Link to="/PrivacyPolicy">Privacy Policy</Link>
							</span>
						</div>
						<div className="Item">
							<span>
								<MdAssignmentLate />
							</span>
							<span>
								<Link to="/Terms">Terms & Conditons</Link>
							</span>
						</div>
						<div className="Item">
							<span>
								<MdLiveHelp />
							</span>
							<span>
								<Link to="/contactUs">Help & Support</Link>
							</span>
						</div>
						<div className="Item">
							<span>
								<MdShare />
							</span>
							<span>
								<Link to="whatsapp://send?text=https://pranforyou.com/">
									Share
								</Link>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MyAccount;
