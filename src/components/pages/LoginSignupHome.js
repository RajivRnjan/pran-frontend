import React from "react";
import CounterSection from "../CounterSection";
import { Helmet } from "react-helmet";

import notesImg from "../../Images/notes.png";
import pyqImg from "../../Images/pyq.png";
import youtubeImg from "../../Images/youtube-img.png";
import ebookImg from "../../Images/e-book-img.png";
import syllabusImg from "../../Images/syllabus-img.png";
import holidayImg from "../../Images/holiday-img.png";
import imageContent1 from "../../Images/img-content1.png";
import imageContent2 from "../../Images/img-content2.jpg";
import imageContent3 from "../../Images/img-content3.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function LoginSignupHome() {

  const navigate = useNavigate();
  useEffect(() => {
    const checkLogin = () => {
      if (localStorage.getItem("auth_token")) {
        navigate("/");
      }
     
    };
    checkLogin();
  });

  return (
		<>
			<Helmet>
				<title>PRAN - Signup</title>
			</Helmet>
			{/* COUNTER */}
			{/* COUNTER */}

			<CounterSection />

			{/* WHY CHOOSE US*/}
			{/* WHY CHOOSE US*/}

			<div className="whyChooseUs">
				<div className="whyChooseUsHeading">
					<h2 data-aos="fade-up">Why Choose Us:</h2>
				</div>

				<div className="whyChooseUsBoxes">
					<div className="box" data-aos="fade-up">
						<img src={notesImg} alt="notes-img" data-aos="fade-up" />
						<h2 data-aos="fade-up">Notes</h2>
						<p data-aos="fade-up">
							All Subjects hand Written notes in structured manner and in
							simplified language
						</p>
					</div>

					<div className="box" data-aos="fade-up">
						<img src={pyqImg} alt="pyq-img" data-aos="fade-up" />
						<h2 data-aos="fade-up">PYQs</h2>
						<p data-aos="fade-up">
							All Subjects previous year question are available in structured
							manner.
						</p>
					</div>

					<div className="box" data-aos="fade-up">
						<img src={youtubeImg} alt="lecture-img" />
						<h2 data-aos="fade-up">Lectures</h2>
						<p data-aos="fade-up">
							All Subjects with there respective units lectures are also
							available here.
						</p>
					</div>
				</div>

				{/*1st Image-content Section*/}
				<div className="Image-content-section">
					<div className="Image-desc">
						<p data-aos="fade-up">
							PRAN an app for all types of study related requirements in Vinoba
							Bhave University (VBU) for the students of VBU. You Can also say
							it VBU students App.
						</p>
					</div>

					<div className="descImage">
						<img src={imageContent1} alt="imageContent1" data-aos="fade-up" />
					</div>
				</div>

				{/*Second Three Boxes */}
				<div className="whyChooseUsBoxes">
					<div className="box" data-aos="fade-up">
						<img src={ebookImg} alt="ebook-img" data-aos="fade-up" />
						<h2 data-aos="fade-up">E-Books</h2>
						<p data-aos="fade-up">
							E-Book of course related book is available.
						</p>
					</div>

					<div className="box" data-aos="fade-up">
						<img src={syllabusImg} alt="syllabus-img" data-aos="fade-up" />
						<h2 data-aos="fade-up">Syllabus</h2>
						<p data-aos="fade-up">
							A syllabus of respective courses with respective semester are also
							available here.
						</p>
					</div>

					<div className="box" data-aos="fade-up">
						<img src={holidayImg} alt="holiday-img" data-aos="fade-up" />
						<h2 data-aos="fade-up">Holidays</h2>
						<p data-aos="fade-up">
							Holiday list circulated by VBU is also available and gets updated
							every year.
						</p>
					</div>
				</div>

				{/*2nd Image-content Section*/}
				<div className="Image-content-section">
					<div className="Image-desc" data-aos="fade-up">
						<p data-aos="fade-up">
							Perfect place for the VBU students. It is a like a guide to score
							good marks in examination. We believe in impact full Study and on
							regular basis revision.
						</p>
					</div>

					<div className="descImage">
						<img src={imageContent2} alt="imageContent2" data-aos="fade-up" />
					</div>
				</div>

				{/*3nd Image-content Section*/}
				<div className="Image-content-section3">
					<div className="Image-desc" data-aos="fade-up">
						<p data-aos="fade-up">
							It is like an open library for the students where they can search
							and solve their query or confusion regarding notes and important
							Notice related to VBU.{" "}
						</p>
					</div>
					<div className="descImage">
						<img src={imageContent3} alt="imageContent3" data-aos="fade-up" />
					</div>
				</div>
			</div>
		</>
	);
}

export default LoginSignupHome;
