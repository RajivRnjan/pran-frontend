import LeftNavbar from "../LeftNavbar";
import { ToastContainer, toast } from 'react-toastify';

import PdfViewer from "../PdfViewer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.svg";
import { FaSearch } from "react-icons/fa";
import Spinner from "../Spinner";
import avtar from "../../Images/avtar.png";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import React from "react";

function Notes() {
  const [loading, setLoading] = useState(false);
  const gotoTopWindow = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const checkLogin = () => {
      if (!localStorage.getItem("auth_token")) {
        navigate("/login");
      }
      if(expirydays === 0){
        navigate("/renew")
      }
    };
    checkLogin();
  });

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("/api/course/courseList")
      .then((response) => {
        const { data } = response;
        setCourses(data.courses);
        setLoading(false);
        // console.log(courses);
      });
  }, []);


  const [expirydays , setExpiryDays] = useState();
  //GET CURRENT SEM COURSE
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
        setExpiryDays(data.expiry);
        if(data.msg === "Plan Expired! Please Renew"){
          navigate("/renew")
          toast("Plan Expired! Please Renew",{
            theme:'dark',
            autoClose:2000,
          })
        }
        setDbCourse(data.user.course);
        setCurrent_sem(data.user.sem);

        // console.log(dbCourse);
      })
      .catch((err) => {
        // ////alert(err);
        console.log(err)
        setLoading(false);
      });
  }, []);

  // UPDATEA COURSE API
  const [selectedCourse, setSelectedCourse] = useState("");

  const selectCourseHandle = (e) => {
    e.preventDefault();
    toast("Please Wait....",{
      theme:'dark',
      autoClose:2000,
    })
    setSelectedCourse(e.target.value);
    // console.log(e.target.value);
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
        console.log(err)
        setLoading(false);
       
      });
  };

  //UPDATE SEM API

  const [selectedSem, setSelectedSem] = useState("");
  const selectSemHandler = (e) => {
    e.preventDefault();
    toast("Please Wait....",{
      theme:'dark',
      autoClose:2000,
    })
    setSelectedSem(e.target.value);
    setLoading(true);

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
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        ////alert(err);
        console.log(err)
      });
  };
  const navigate = useNavigate();



  //GET SUJECT LIST
  const [subject, setSubject] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .get(
        "/api/subject/getSubjectByToken",
        {
          headers: {
            Authorization: "auth " + localStorage.getItem("auth_token"),
          },
        }
      )
      .then((response) => {
        const { data } = response;
        // console.log(data);
        setSubject(data.subjects);
        setLoading(false);

        // console.log(subject)
      });
  }, []);

  // GET NOTEs
  const [posts, setPosts] = useState([]);
  const [changed, setChanged] = useState(false);
  const selectSubjectHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setChanged(true);

    // console.log(selectedSubject);

    axios
      .post(
        "/api/post/getPostBySubject",
        {
          subId: e.target.value,
        },
        {
          headers: {
            Authorization: "auth " + localStorage.getItem("auth_token"),
          },
        }
      )
      .then((response) => {
        // toast("Here is Your Notes")
        const { data } = response;
        // setSubject(data);
        setLoading(false);
        setPosts(data.posts);
        setChanged(true);
        // console.log(data.posts);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err)
        setChanged(false);
      });
  };
  // console.log(changed)
  // GET 8 Latest post
  const [latestPost, setLatestPost] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/post/getPosts", {
        headers: {
          Authorization: "auth " + localStorage.getItem("auth_token"),
        },
      })
      .then((res) => {
        toast("Here are Latest Post",{
          theme:'dark',
          autoClose:2000,
        })
        const { data } = res;
        setLoading(false);
        setLatestPost(data.posts);
        // console.log(data)
      })
      .catch((err) => {
        ////alert(err);
        setLoading(false);
        console.log(err)
      });
  }, []);
  useEffect(() => {}, []);

  //UPDATE COURSE
  useEffect(() => {
    setLoading(true);
  }, [selectedCourse, selectedSem]);

  return (
		<>
			<Helmet>
				<title>PRAN - Notes</title>
			</Helmet>
			{/* TOP NAVBAR */}
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

			<div className="NotesContainer">
				<div className="SubjectRow">
					<div className="SubjectItem">
						<select
							className="select"
							name="subId"
							onChange={selectSubjectHandler}
						>
							<option>Choose Subject</option>
							{subject !== undefined &&
								subject.map((subject) => {
									return (
										<option className="option" value={subject.subId}>
											{subject.name}
										</option>
									);
								})}
						</select>
					</div>
				</div>

				<div className="NotesCard">
					{changed == false &&
						latestPost !== undefined &&
						latestPost.map((post) => {
							return (
								<div className="NotesCardItem" data-aos="fade-up">
									<Link to={"/pdfViewer/" + post._id}>
										<div data-aos="fade-up">
											<h4>{post.title}</h4>
											<p>{post.desc}</p>
											<p>Views : {post.views}</p>
										</div>
									</Link>
								</div>
							);
						})}
				</div>

				<div className="NotesCard">
					{posts !== undefined &&
						posts.map((post) => {
							return (
								<div className="NotesCardItem" data-aos="fade-up">
									<Link to={"/pdfViewer/" + post._id}>
										<div data-aos="fade-up">
											<h4>{post.title}</h4>
											<p>{post.desc}</p>
											<p>Views : {post.views}</p>
										</div>
									</Link>
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
}

export default Notes;
