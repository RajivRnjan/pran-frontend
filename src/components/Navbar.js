import React from 'react'
import {Link} from "react-router-dom";

import logo from "../Images/logo.svg";


function Navbar() {
  const gotoTopWindow = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      };
  return (
    <>
    <nav>
    <div id="navbar">
       <div className="nav-left">
         <Link to="/">
           <div>
             <img src={logo} className="nav-logo" alt="logo" />
           </div>
         </Link>
    </div>

    <div className="nav-right">
      <ul className="nav-items">
        <li onClick={gotoTopWindow}><Link to="/Login">Home</Link></li>
        <li onClick={gotoTopWindow}><Link to="/AboutUs">About</Link></li>
        {/* <li onClick={gotoTopWindow}><Link to="/Signup">Signup</Link></li> */}
        {/* <li onClick={gotoTopWindow}><Link to="/Login">Login</Link></li> */}
        <li onClick={gotoTopWindow}><Link to="/ContactUs">Contact</Link></li>

      </ul>
    </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar