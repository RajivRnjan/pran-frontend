import React from "react";
import { MdEmail } from "react-icons/md";
import logo from "../Images/logo.svg";
import googlePlay from "../Images/google play.png";
import { Link } from "react-router-dom";

function Footer() {
  const gotoTopWindow = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="footerContainer">
        <div className="leftFooter">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="footerEmail">
            <MdEmail size={"20px"} />
            <p>pran7181@gmail.com</p>
          </div>
        </div>
        <div className="middleFooter">
          <div className="middleTopFooter">
            <div className="middleTopLeftItem">
              <ul>
                <Link to="/"><li onClick={gotoTopWindow}>Home</li></Link>
                <li>Notes</li>
                <li>Menu</li>
                <li>About Us</li>
                <li>Chats</li>
              </ul>
            </div>

            <div className="middleTopMiddleItem">
              <ul>
                <li>Holiday</li>
                <li>Syllabus</li>
                <li>PYQ</li>
                <li>E-Book</li>
                <li>Video</li>
              </ul>
            </div>

            <div className="middleTopRightItem">
              <ul>
                <li onClick={gotoTopWindow}>
                  <Link to="/PrivacyPolicy">Privacy Policy</Link>
                </li>
                <li onClick={gotoTopWindow}>
                  <Link to="/Terms">Terms & Conditions</Link>
                </li>
                <li onClick={gotoTopWindow}>
                  <Link to="/ContactUs">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rightFooter">
          <Link to="https://play.google.com/store/search?q=pran%20vbu&c=apps">
            <img src={googlePlay} alt="googlePlay" />
          </Link>
        </div>
      </div>
      <div className="BottomFooter">
        <p>&copy; Copyright 2023 by PRAN. All Rights Reserved.</p>
      </div>
    </>
  );
}

export default Footer;
