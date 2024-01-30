import React from "react";
import vbuImg from "../../Images/vbuImg.png";
import logo from "../../Images/logo.svg";
import CounterSection from "../CounterSection";
import Crousel from "../Crousel";
import DeveloperCrousel from "../DeveloperCrousel";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
function AboutUs() {
  return (
		<>
			<Helmet>
				<title>PRAN - About</title>
			</Helmet>
			<Navbar />
			<div className="vbuImg" data-aos="fade-up">
				<img src={vbuImg} alt="vbuImg" />
			</div>

			<div className="AboutSection1" data-aos="fade-up">
				<img src={logo} className="AboutSection1Logo" alt="logo" />

				<div className="AboutSection1Desc">
					<p data-aos="fade-up">
						PRAN is a Professional Educational Platform. Here we will provide
						you content related to your Course, which will enhance your
						productivity in your Studies.{" "}
					</p>
				</div>
			</div>

			{/* WHO WE ARE START */}
			{/* WHO WE ARE START*/}

			<div className="WhoWeAre">
				<h2 data-aos="fade-up">WHO WE ARE</h2>
				<p data-aos="fade-up">
					PRAN an app for all types of study related requirements in Vinoba
					Bhave University (VBU) for the students of VBU.
					<br />
					You Can also say it VBU students App.
					<br />
				</p>

				<p data-aos="fade-up">
					PRAN is a Professional Educational Platform. Here we will provide you
					content related to your Course, which will enhance your productivity
					in your Studies.
				</p>

				<p data-aos="fade-up">
					It is like an open library for the students where they can search and
					solve their query or confusion regarding notes and important Notice
					related to VBU.
				</p>
			</div>

			{/* WHO WE ARE End */}
			{/* WHO WE ARE End*/}

			<DeveloperCrousel />

			{/* Our Story Start*/}
			<div className="ourStoryContainer">
				<div className="ourStory">
					<div className="ourStoryHeading">
						<h2 data-aos="fade-up">Our Story</h2>
					</div>

					<div className="ourStoryDesc">
						<p data-aos="fade-up">
							The idea of PRAN came to the light when we faced difficulties
							finding proper notes of respective subjects and PYQs of those
							subjects. We are thinking of resolving this issue then our Founder
							Navin came with the solution and that’s how PRAN was born. It is
							almost 1.5 years we are runing this website and happend to be in
							all the colleges associated with Vinoba Bhave University.{" "}
						</p>
					</div>
				</div>
			</div>
			{/* Our Story End*/}

			{/* Our Vision Start*/}
			<div className="ourVisionContainer">
				<div className="ourVision">
					<div className="ourVisionHeading">
						<h2 data-aos="fade-up">Our Vision</h2>
					</div>

					<div className="ourVisionDesc">
						<p data-aos="fade-up">
							Our vision is to create an educational platform that is
							personalized, engaging, effective, and accessible to all learners.
							We believe that every learner is unique, and we want to create an
							app that can adapt to each learner's individual needs. We also
							believe that learning should be fun and engaging, and we want to
							create an app that makes learning exciting and rewarding.
							<br />
							Finally, we want to make sure that our website is accessible to
							all learners, regardless of their background or abilities.
						</p>
					</div>
				</div>
			</div>
			{/* Our Vision End*/}

			{/* Where WE ARE start*/}
			{/* Where WE ARE End*/}

			<CounterSection />

			{/* SpeicalThanksTo Start*/}
			<div className="SpecialThanksTo"></div>
			{/* SpeicalThanksTo End */}

			<Crousel />
			<Footer />
		</>
	);
}

export default AboutUs;
