import React from "react";
import { Link } from "react-router-dom";
import googlePlay from "../Images/googleplay.svg";
import users from "../Images/users.png";
import views from "../Images/views.png";
import rating from "../Images/rating.png";

function CounterSection() {
  return (
    <>
      {/* COUNTER */}
      {/* COUNTER */}
      <Link to ="https://play.google.com/store/apps/details?id=com.navinkrv.pran&pcampaignid=web_share" target="_blank">
      <div className="counterContainer">
      <div className="Counter-row" data-aos="fade-up">
          <img src={googlePlay} alt="googlePlay" />
          <p>100+ Downloads</p>
        </div>
        <div className="Counter-row" data-aos="fade-up">
          <img src={users} alt="users" />
          <p>400+  Users</p>
        </div>
        <div className="Counter-row" data-aos="fade-up">
          <img src={views} alt="views" />
          <p>20393+ Views</p>
        </div>
        <div className="Counter-row" data-aos="fade-up">
          <img src={rating} alt="rating" />
          <p>4.8 Rating</p>
      </div>
        </div></Link>
    </>
  );
}

export default CounterSection;
