import React, { useEffect, useState } from "react";
import axios from "axios";
import MyAccount from "../components/pages/MyAccount";
import { Link } from "react-router-dom";
import logo from "../Images/logo.svg";
import avtar from "../Images/avtar.png";
import { FaSearch } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";

function TopNavbar() {
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const gotoTopWindow = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("/api/course/courseList")
      .then((response) => {
        const { data } = response;
        setCourses(data.courses);
        setLoading(false);
      });
  }, []);

  const [selectedCourse, setSelectedCourse] = useState("dfdf");

  const selectCourseHandle = (e) => {
    e.preventDefault();
    setSelectedCourse(e.target.value);
    console.log(selectedCourse);
  };

  return (
    <nav>
    <div id="navbar">
      <div className="NavbarContainer">
        <div className="nav-left">
          <Link to="/">
            <div onClick={gotoTopWindow}>
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
              {/* <option value="course">Course</option> */}
              {courses.map((course) => {
                return <option value={course.course}>{course.course}</option>;
              })}
            </select>
          </div>
          <div className="SemSelect">
            <select name="sem">
              <option value="sem">Sem</option>
              {courses.map((course) => {
                if (course.course === selectedCourse) {
                  return course.sem.map((sem) => {
                    return <opton value={sem}>{sem}</opton>;
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
  );
}

export default TopNavbar;
