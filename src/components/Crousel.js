import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Crousel() {
  return (
    <>
      <div className="CrouselContainer">
        <div className="CrouselHeading">
          {/* <h1>Words by Our Users</h1> */}
        </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
        >
          <div className="card">
            <div className="card-header">
              <img src="/Images/yashwant.png"  alt="review-img"/>
              <h2>Yashwant Mandal</h2>
            </div>

            <p>
              Beneficial for VBU students for study stuffs like notes,pyqs and
              notices. Thnx developer for developing this app?
            </p>
          </div>
          <div className="card">
            <div className="card-header">
              <img src="/Images/ankitRaj.png" alt="review-img" />
              <h2>Ankit Raj</h2>
            </div>

            <p>
              Very useful application here all PYQ and notes are available which
              helps the student in analysing question pattern of upcoming
              examination...
            </p>
          </div>

          <div className="card">
            <div className="card-header">
              <img src="/Images/siddharth.png" alt="review-img" />
              <h2>Siddharth Kumar</h2>
            </div>

            <p>
              Beneficial for VBU students for study stuffs like notes,pyqs and
              notices. Thnx developer for developing this app?
            </p>
          </div>
          <div className="card">
            <div className="card-header">
            <img src="/Images/pinki.png" alt="review-img" />
              <h2>Pinki Kumari</h2>
            </div>

            <p>
              This is very helpful app for me. I Got all my study materials in
              this app. I recommend this to all vbu students.
            </p>
          </div>
          <div className="card">
            <div className="card-header">
             
              <img src="/Images/rajendra.png" alt="review-img" />
              <h2>Rajendra Kumar</h2>
            </div>

            <p>
              Awesome! Thanks for providing such educational app for all VBU
              students.
            </p>
          </div>

          <div className="card">
            <div className="card-header">
            <img src="/Images/aman.png" alt="review-img" />
              <h2>Aman Sourav</h2>
            </div>

            <p>
              Great! All notes are available with previous year question and it
              serve elibrary book . All notice of vbu are informed on this app
              and it's notification are use for essential work.
            </p>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Crousel;
