import React from "react";
import CounterSection from "./CounterSection";

import notesImg from "../../Images/notes.png";
import pyqImg from "../../Images/pyq.png";
import youtubeImg from "../../Images/youtube-img.png";
import ebookImg from "../../Images/e-book-img.png";
import syllabusImg from "../../Images/syllabus-img.png";
import holidayImg from "../../Images/holiday-img.png";
import imageContent1 from "../../Images/img-content1.png";
import imageContent2 from "../../Images/img-content2.jpg";
import imageContent3 from "../../Images/img-content3.jpg";

function LoginSignupHome() {
  return (
    <>
      {/* COUNTER */}
      {/* COUNTER */}

      <CounterSection />

      {/* WHY CHOOSE US*/}
      {/* WHY CHOOSE US*/}

      <div className="whyChooseUs">
        <div className="whyChooseUsHeading">
          <h2>Why Choose Us:</h2>
        </div>

        <div className="whyChooseUsBoxes">
          <div className="box">
            <img src={notesImg} alt="notes-img" />
            <h2>Notes</h2>
            <p>
              All Subjects hand Written notes in structured manner and in
              simplified language
            </p>
          </div>

          <div className="box">
            <img src={pyqImg} alt="pyq-img" />
            <h2>PYQs</h2>
            <p>
              All Subjects previous year question are available in structured
              manner.
            </p>
          </div>

          <div className="box">
            <img src={youtubeImg} alt="lecture-img" />
            <h2>Lectures</h2>
            <p>
              All Subjects with there respective units lectures are also
              available here.
            </p>
          </div>
        </div>

        {/*1st Image-content Section*/}
        <div className="Image-content-section">
          <div className="Image-desc">
            <p>
              PRAN an app for all types of study related requirements in Vinoba
              Bhave University (VBU) for the students of VBU. You Can also say
              it VBU students App.
            </p>
          </div>

          <div className="descImage">
            <img src={imageContent1} alt="imageContent1" />
          </div>
        </div>

        {/*Second Three Boxes */}
        <div className="whyChooseUsBoxes">
          <div className="box">
            <img src={ebookImg} alt="ebook-img" />
            <h2>E-Books</h2>
            <p>E-Book of course related book is available.</p>
          </div>

          <div className="box">
            <img src={syllabusImg} alt="syllabus-img" />
            <h2>Syllabus</h2>
            <p>
              A syllabus of respective courses with respective semester are also
              available here.
            </p>
          </div>

          <div className="box">
            <img src={holidayImg} alt="holiday-img" />
            <h2>Holidays</h2>
            <p>
              Holiday list circulated by VBU is also available and gets updated
              every year.
            </p>
          </div>
        </div>

        {/*2nd Image-content Section*/}
        <div className="Image-content-section">
          <div className="Image-desc">
            <p>
              Perfect place for the VBU students. It is a like a guide to score
              good marks in examination. We believe in impact full Study and on
              regular basis revision.
            </p>
          </div>

          <div className="descImage">
            <img src={imageContent2} alt="imageContent2" />
          </div>
        </div>

        {/*3nd Image-content Section*/}
        <div className="Image-content-section3">
          <div className="Image-desc">
            <p>
              It is like an open library for the students where they can search
              and solve their query or confusion regarding notes and important
              Notice related to VBU.{" "}
            </p>
          </div>
          <div className="descImage">
            <img src={imageContent3} alt="imageContent3" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSignupHome;
