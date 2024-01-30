import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Toast from "../Toast";
import { Helmet } from "react-helmet";
import Spinner from "../Spinner";
import LeftNavbar from "../LeftNavbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.svg";
import { FaSearch } from "react-icons/fa";
import avtar from "../../Images/avtar.png";
import { useEffect, useState } from "react";
import NotesCard from "../NotesCard";
// import pranBanner1 from "../../Images/Durga1024.png";
// import pranBanner2 from "../../Images/pranbanner1024.png";
import AdsImg1 from "../../Images/Promotion1.png";
// import AdsImg from "../../Images/ads.webp";
import { BsMessenger } from "react-icons/bs";
import { GoAlertFill } from "react-icons/go";
import HeroCrousel from "../HeroCrousel";

function Home() {
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
			if (expirydays === 0) {
				navigate("/renew");
			}
		};
		checkLogin();
	});

	const [clickRecent, setClickRecent] = useState(true);
	const [clickVideo, setClickVideo] = useState(false);
	const [clickEbooks, setClickEbooks] = useState(false);
	const [clickPyq, setClickPyq] = useState(false);

	const [courses, setCourses] = useState([]);
	useEffect(() => {
		setLoading(true);

		axios.get("/api/course/courseList").then((response) => {
			const { data } = response;
			setCourses(data.courses);
			setLoading(false);
		});
		toast("For Better Reading Experience, Use Laptop or Desktop", {
			theme: "dark",
			autoClose: 5000,
		});
	}, []);

	const [expirydays, setExpiryDays] = useState();
	//GET CURRENT  COURSE SEM COURSE
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
				// console.log(data)
				setLoading(false);
				setExpiryDays(data.expiry);
				if (data.msg === "Plan Expired! Please Renew") {
					navigate("/renew");
					toast("Plan Expired! Please Renew", {
						theme: "dark",
						autoClose: 2000,
					});
				}

				setDbCourse(data.user.course);
				setCurrent_sem(data.user.sem);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	}, []);

	// UPDATE COURSE API
	const [selectedCourse, setSelectedCourse] = useState("");

	const selectCourseHandle = (e) => {
		e.preventDefault();
		setSelectedCourse(e.target.value);
		// console.log(e.target.value);
		toast("Please wait....", {
			theme: "dark",
			autoClose: 2000,
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
				//alert(err);
				console.log(err);
			});
	};

	//UPDATE SEM API

	const [selectedSem, setSelectedSem] = useState("");
	const selectSemHandler = (e) => {
		e.preventDefault();
		toast("Please Wait....", {
			theme: "dark",
			autoClose: 2000,
		});
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
				// console.log(data);
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				//alert(err);
				console.log(err);
			});
	};

	const navigate = useNavigate();

	// GET RECENT POST
	const [posts, setPosts] = useState([]);
	const getRecentsHandler = () => {
		// toast("Your Recently Viewed",{
		//   theme:'dark',
		//   autoClose:2000,
		// });

		setLoading(true);
		setClickRecent(true);

		setClickEbooks(false);
		setClickVideo(false);

		setClickPyq(false);
		setChanged(false);

		axios
			.get("/api/post/getRecents", {
				headers: {
					Authorization: "auth " + localStorage.getItem("auth_token"),
				},
			})
			.then((res) => {
				setLoading(false);
				const { data } = res;
				setPosts(data.recents);
			})
			.catch((err) => {
				setLoading(false);

				console.log(err);
			});
	};

	useEffect(() => {
		getRecentsHandler();
	}, []);

	// GET EBOOKS

	const ebooksHandler = (e) => {
		setClickEbooks(true);
		if (clickEbooks) {
			e.target.style.backgroundColor = "#1080E9";
		}
		setClickVideo(false);
		setClickPyq(false);
		setClickRecent(false);
		setLoading(true);
		setChanged(false);
		// toast("Here are some Ebooks.");
		axios
			.get("/api/post/getEbooks", {
				headers: {
					Authorization: "auth " + localStorage.getItem("auth_token"),
				},
			})
			.then((res) => {
				setLoading(false);
				const { data } = res;
				setPosts(data.ebooks);
				console.log(data.ebooks);
				//  setClickRecent(false)
			})
			.catch((err) => {
				setLoading(false);
				//alert(err);
				console.log(err);
				//  setClickRecent(false)
			});
	};

	//GET PYQ

	const pyqHandler = (e) => {
		setClickPyq(true);
		// if (clickPyq) {
		//   e.target.style.backgroundColor = "#1080E9";
		// }
		setClickPyq(true);
		setClickRecent(false);
		setClickEbooks(false);
		setClickVideo(false);
		e.preventDefault();
		setLoading(true);
		setChanged(false);

		// toast("Here are some PYQs");

		axios
			.get("/api/post/getPyq", {
				headers: {
					Authorization: "auth " + localStorage.getItem("auth_token"),
				},
			})
			.then((res) => {
				setLoading(false);
				const { data } = res;
				setPosts(data.posts);
			})
			.catch((err) => {
				setLoading(false);

				console.log(err);
			});
	};

	const [changed, setChanged] = useState(false);
	//GET VIDEOS
	const [video, setVideo] = useState([]);
	const videoHandler = (e) => {
		setClickVideo(true);
		setClickPyq(false);
		setClickEbooks(false);
		setClickRecent(false);
		setLoading(true);
		// toast("Here are some Videos");

		axios
			.get("/api/post/getVideosBySubject", {
				headers: {
					Authorization: "auth " + localStorage.getItem("auth_token"),
				},
			})
			.then((res) => {
				setChanged(true);
				setLoading(false);

				const { data } = res;
				setVideo(data.posts);
				// console.log(data);
			})

			.catch((err) => {
				setLoading(false);
				//alert(err);
				console.log(err);
			});
	};

	useEffect(() => {
		setLoading(true);
	}, [clickRecent, clickPyq]);

	return (
		<>
			{/* TOP NAVBAR */}
			<Helmet>
				<title>PRAN - Home</title>
			</Helmet>
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
									{" "}
									<img src={avtar} alt="avtar" className="avtar-img" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
			{/* TOP NAVBAR */}
			{loading ? <Spinner /> : ""}
			{/* <ToastContainer /> */}

			<LeftNavbar />

			<div className="HomeContainer">
				<div className="HomeTop">
					<div className="HomeTopLeft">
						{/* <img src={pranBanner1} alt="banner" /> */}
						<HeroCrousel />
					</div>
					<div className="HomeTopRight">
						<div className="c-1">
							<button className="chats">
								<BsMessenger className="chat-icon" />
								Chats
							</button>
						</div>

						{expirydays <= 5 ? (
							<div className="c-2">
								<GoAlertFill className="alert-icon" />

								<p>Your plan will be expire in {expirydays} days</p>
								<div className="button">
									<button className="history sign-up">
										<Link to="/transaction">History</Link>
									</button>
									<button className="renew get-started">
										<Link to="/paymentQr">Renew</Link>
									</button>
								</div>
							</div>
						) : (
							<div className="c-2">
								<Link
									to="https://play.google.com/store/apps/details?id=com.navinkrv.pran&pcampaignid=web_share"
									target="_blank"
								>
									<img src={AdsImg1} alt="banner" />
								</Link>
							</div>
						)}
					</div>
				</div>

				<div className="HomeMiddle">
					<div className="SubjectRow">
						<div
							className="SubjectItem"
							style={{ backgroundColor: clickRecent ? "#1080E9" : "" }}
							onClick={getRecentsHandler}
						>
							Recently Viewed
						</div>
						{/* <div className="SubjectItem">Most Viewed</div> */}
						<div
							className="SubjectItem"
							style={{ backgroundColor: clickVideo ? "#1080E9" : "" }}
							onClick={videoHandler}
						>
							Videos
						</div>
						{/* <div className="SubjectItem">Saved</div> */}
						<div
							className="SubjectItem"
							style={{ backgroundColor: clickEbooks ? "#1080E9" : "" }}
							onClick={ebooksHandler}
						>
							E-books
						</div>
						<div
							className="SubjectItem"
							style={{ backgroundColor: clickPyq ? "#1080E9" : "" }}
							onClick={pyqHandler}
						>
							PYQ
						</div>
					</div>
				</div>

				<div className="HomeBottom">
					<div className="HomeBottomLeft">
						<div className="NotesCard">
							{changed === false &&
								posts !== undefined &&
								posts.map((item) => {
									if (item.type === "notes") {
										return (
											<NotesCard
												id={item._id}
												title={item.title}
												desc={item.desc}
												link={item.link}
												views={item.views}
											/>
										);
									}
								})}
						</div>
						<div className="NotesCard">
							{changed === true &&
								video !== undefined &&
								video.map((item) => {
									return (
										<div className="NotesCardItem">
											<Link to={"/YoutubeViewer/" + item._id}>
												<div>
													<h4>{item.title}</h4>
													<p>{item.desc}</p>
													<p>Views : {item.views}</p>
												</div>
											</Link>
										</div>
									);
								})}
						</div>
					</div>
					<div className="HomeBottomRight">
						<Link
							to="https://play.google.com/store/apps/details?id=com.navinkrv.pran&pcampaignid=web_share"
							target="_blank"
						>
							<img src={AdsImg1} alt="adsImg" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
