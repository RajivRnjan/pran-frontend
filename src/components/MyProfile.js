import React from "react";
import Spinner from "./Spinner";
import LeftNavbar from "./LeftNavbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../Images/logo.svg";
import profileImg from "../Images/photo.png";
import { FaSearch } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import avtar from "../Images/avtar.png";
import coverImg from "../Images/cover_img.png";
import { RxCross2 } from "react-icons/rx";
import {
  BsPeopleFill,
  BsCalendarDateFill,
  BsPhoneFill,
  BsFillHouseGearFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

import { useEffect, useState } from "react";
import GoBackBtn from "./GoBackBtn";
import { ToastContainer, toast } from "react-toastify";

function MyProfile() {
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

    axios.get("/api/course/courseList").then((response) => {
      const { data } = response;
      setCourses(data.courses);
      setLoading(false);
    });
  }, []);

  //GET CURRENT COURSE SEM
  const [dbCourse, setDbCourse] = useState("");
  const [current_sem, setCurrent_sem] = useState("");

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

        // console.log(dbCourse);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // UPDATE COURSE API
  const [selectedCourse, setSelectedCourse] = useState("");

  const selectCourseHandle = (e) => {
    e.preventDefault();
    setSelectedCourse(e.target.value);
    // console.log(e.target.value);
    toast("Please wait....",{
      theme:'dark',
      autoClose:2000,
    });

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
        console.log(err);
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
    });

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
        console.log(err);
      });
  };

  const navigate = useNavigate();
  // GET USER Details
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");
  const [sem, setSem] = useState("");
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
        // console.log(data)
        setName(data.user.name);
        setEmail(data.user.email);
        setNumber(data.user.number);
        setCourse(data.user.course);
        setCollege(data.user.college);
        setSem(data.user.sem);
        setExpiry(data.user.Expiry);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  }, []);
  return (
    <>
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
      <ToastContainer/>
      <LeftNavbar />

      <div className="MyAccountContainer">
        <Link to="/myAccount">
          <GoBackBtn />
        </Link>
        <h2>My Profile</h2>
        <div className="Container">
          <div className="Top">
            <div className="Cover">
              <img src={coverImg} alt="cover-page" />
            </div>
            <div className="Photo">
              <img src={profileImg} alt="photo" />
            </div>
          </div>
          <div className="Bottom">
            <div className="BottomLeft">
              <div className="label">
                <span>
                  <BsPeopleFill />
                </span>
                <span>{name}</span>
              </div>
              <div className="label">
                <span>
                  <BsPhoneFill />
                </span>
                <span>{number}</span>
              </div>

              <div className="course-sem">
                <div className="label">
                  <span>
                    <FaGraduationCap />
                  </span>
                  <span>{course}</span>
                </div>
                <div className="label">
                  <span>
                    <FaSchool />
                  </span>
                  <span>{sem}</span>
                </div>
              </div>
            </div>
            <div className="BottomRight">
              <div className="label">
                <span>
                  <MdEmail />
                </span>
                <span>{email}</span>
              </div>

              <div className="label">
                <span>
                  <BsFillHouseGearFill />
                </span>
                <span>{college}</span>
              </div>

              <div className="label">
                <span>
                  <BsCalendarDateFill />
                </span>
                <span>{new Date(expiry).toDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
