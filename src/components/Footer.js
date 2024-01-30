import React from "react";
import { MdEmail } from "react-icons/md";
import logo from "../Images/logo.svg";
import googlePlay from "../Images/google play.png";
import { Link } from "react-router-dom";

function Footer() {

  let date = new Date();
  let year = date.getFullYear();
  const gotoTopWindow = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="footerContainer">
        <div className="leftFooter">
          <div className="logo">
            <Link to="/"><img src={logo} alt="logo" /></Link>
          </div>
          <div className="footerEmail">
            <MdEmail size={"20px"} />
            <p><Link to ="mailto:pran7181@gmail.com">pran7181@gmail.com</Link></p>
          </div>
        </div>
        <div className="middleFooter">
          <div className="middleTopFooter">
            <div className="middleTopLeftItem">
              <ul>
                <Link to="/">
                  <li onClick={gotoTopWindow}>Home</li>
                </Link>
                <li onClick={gotoTopWindow}>
                  <Link to="/notes">Notes</Link>
                </li>
                <li onClick={gotoTopWindow}>
                  <Link to="/">Menu</Link>
                </li>
              
                <li onClick={gotoTopWindow}>
                  <Link to="/AboutUs">About Us</Link>
                </li>
                <li>Chats</li>
              </ul>
            </div>

            <div className="middleTopMiddleItem">
              <ul>
                <li onClick={gotoTopWindow}>
                  <Link to="/">Holiday</Link>
                </li>
                <li onClick={gotoTopWindow}>
                  <Link to="/">Syllabus</Link>
                </li>
                <li onClick={gotoTopWindow}>
                  <Link to="/">PYQ</Link>
                </li>
                <li onClick={gotoTopWindow}>
                  <Link to="/">E-Book</Link>
                </li>
                <li onClick={gotoTopWindow}>
                  <Link to="/">Video</Link>
                </li>
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
          <Link to="https://play.google.com/store/apps/details?id=com.navinkrv.pran&pcampaignid=web_share" target="_blank">
            <img src={googlePlay} alt="googlePlay" />
          </Link>
        </div>
      </div>
      <div className="BottomFooter">
        <p>
          
          &copy; Copyright {year} by{" "}
          <a href="https://techiesgateway.com" target="_blank">
            <b>TechiesGateway.</b>
          </a>{" "}
          All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
