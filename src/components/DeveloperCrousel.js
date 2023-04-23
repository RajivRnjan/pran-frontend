import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navin from "../Images/NavinImg.png";
import Rajiv from "../Images/RajivImg.png";
import Neha from "../Images/NehaImg.jpg";
import Pawan from "../Images/PawanImg.png";
import Aditya from "../Images/AdityaImg.png";
import Sandeep from "../Images/SandeepImg.png";

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

function DeveloperCrousel() {
  return (
    <>
      <div className="DeveloperCrouselContainer">
        <div className="DeveloperCrouselHeading">
          <h1>Our Team</h1>
        </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
        >
          <div className="DeveloperCard">
            <div className="DeveloperCard-header">
              <img src={Navin} />
            </div>

            <div className="DeveloperCard-Footer">
              <h2>Navin Kumar</h2>
              <p>FrontEnd & BackEnd Developer</p>
            </div>
          </div>

          <div className="DeveloperCard">
            <div className="DeveloperCard-header">
              <img src={Rajiv} />
            </div>

            <div className="DeveloperCard-Footer">
              <h2>Rajiv Ranjan</h2>
              <p>FrontEnd & BackEnd Developer</p>
            </div>
          </div>

          <div className="DeveloperCard">
            <div className="DeveloperCard-header">
              <img src={Neha} />
            </div>

            <div className="DeveloperCard-Footer">
              <h2>Neha Kumari</h2>
              <p>Android Developer</p>
            </div>
          </div>

          <div className="DeveloperCard">
            <div className="DeveloperCard-header">
              <img src={Pawan} />
            </div>

            <div className="DeveloperCard-Footer">
              <h2>Pawan Kumar</h2>
              <p>Graphics Designer</p>
            </div>
          </div>

          <div className="DeveloperCard">
            <div className="DeveloperCard-header">
              <img src={Sandeep} />
            </div>

            <div className="DeveloperCard-Footer">
              <h2>Sandeep Kumar</h2>
              <p>Google Play Support</p>
            </div>
          </div>

          <div className="DeveloperCard">
            <div className="DeveloperCard-header">
              <img src={Aditya} />
            </div>

            <div className="DeveloperCard-Footer">
              <h2>Aditya Kumar</h2>
              <p>Graphics Designer</p>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default DeveloperCrousel;
