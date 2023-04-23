import React from "react";
import googlePlay from "../../Images/googleplay.svg";
import users from "../../Images/users.png";
import views from "../../Images/views.png";
import rating from "../../Images/rating.png";

function CounterSection() {
  return (
    <>
      {/* COUNTER */}
      {/* COUNTER */}

      <div className="counterContainer">
        <div className="Counter-row">
          <img src={googlePlay} alt="googlePlay" />
          <p>100+ Downloads</p>
        </div>
        <div className="Counter-row">
          <img src={users} alt="users" />
          <p>400 Users</p>
        </div>
        <div className="Counter-row">
          <img src={views} alt="views" />
          <p>20393 Views</p>
        </div>
        <div className="Counter-row">
          <img src={rating} alt="rating" />
          <p>4.8 Rating</p>
        </div>
      </div>
    </>
  );
}

export default CounterSection;
