import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pranBanner1 from "../Images/Durga1024.png";
import pranBanner2 from "../Images/pranbanner1024.png";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function HeroCrousel() {
  return (
    <>
      <div className="HeroCrouselContainer">
       
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3500}
        >
          <div className="">
            <img src={pranBanner1} alt="banner" />
          </div>
          <div className="">
            <img src={pranBanner2} alt="banner" />
          </div>

          {/* <div className="">
            <img src={pranBanner1} alt="banner" />
          </div> */}
          {/* <div className="">
            <img src={pranBanner2} alt="banner" />
          </div> */}
        </Carousel>
      </div>
    </>
  );
}

export default HeroCrousel;
