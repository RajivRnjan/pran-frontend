import React from "react";
import vbuImg from "../../Images/vbuImg.png";
import logo from "../../Images/logo.svg";
import CounterSection from "./CounterSection";
import Crousel from "../Crousel";
import DeveloperCrousel from "../DeveloperCrousel";

function AboutUs() {
  return (
    <>
      <div className="vbuImg">
        <img src={vbuImg} alt="vbuImg" />
      </div>

      <div className="AboutSection1">
        <img src={logo} className="AboutSection1Logo" alt="logo" />

        <div className="AboutSection1Desc">
          <p>
            PRAN is a Professional Educational Platform. Here we will provide
            you content related to your Course, which will enhance your
            productivity in your Studies.{" "}
          </p>
        </div>
      </div>

      {/* WHO WE ARE START */}
      {/* WHO WE ARE START*/}

      <div className="WhoWeAre">
        <h2>WHO WE ARE</h2>
        <p>
          PRAN an app for all types of study related requirements in Vinoba
          Bhave University (VBU) for the students of VBU.
          <br />
          You Can also say it VBU students App.
          <br />
        </p>

        <p>
          PRAN is a Professional Educational Platform. Here we will provide you
          content related to your Course, which will enhance your productivity
          in your Studies.
        </p>

        <p>
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
            <h2>Our Story</h2>
          </div>

          <div className="ourStoryDesc">
            <p>
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

      {/* Where WE ARE start*/}
      {/* Where WE ARE End*/}

      <CounterSection />

      {/* SpeicalThanksTo Start*/}
      <div className="SpecialThanksTo"></div>
      {/* SpeicalThanksTo End */}

      <Crousel />
    </>
  );
}

export default AboutUs;
