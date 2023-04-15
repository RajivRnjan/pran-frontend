import React from 'react';  
import {MdEmail} from 'react-icons/md';
import logo from '../Images/logo.svg';
import googlePlay from '../Images/google play.png';
import { Link } from 'react-router-dom';
              
function Footer() {
  return (
    <>

    <div className="footerContainer">
        <div className="leftFooter">
            <div className="logo">
                <img src={logo} alt='logo'/>
            </div>
            <div className="footerEmail">

                <MdEmail size={"20px"}/><p>pran7181@gmail.com</p>
            </div>
        </div>
        <div className="middleFooter">
            <div className="middleTopFooter">
                <div className="middleTopLeftItem">
                    <ul>
                        <li>Home</li>
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
                        <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
                        <li><Link to="/Terms">Terms & Conditions</Link></li>
                        <li><Link to="/ContactUs">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
            
        </div>
        <div className="rightFooter">
            <img src={googlePlay} alt='googlePlay'/>
        </div>
    </div>
            <div className="BottomFooter">
                <p>&copy; Copyright 2023 by PRAN. All Rights Reserved.</p>
            </div>
           
    </>
  )
}

export default Footer