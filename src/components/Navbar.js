import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.svg";
import avtar from "../Images/avtar.png";
import { FaSearch } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [isActive, setIsActive] = useState(true);

  const gotoTopWindow = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const [leftNav, setLeftNav] = useState();

  useEffect(() => {
    if (!localStorage.getItem("auth_token")) {
      setLeftNav(
        <div className="nav-right">
          <ul className="nav-items">
            <li onClick={gotoTopWindow}>
              <Link to="/AboutUs">About Us</Link>
            </li>
            <li onClick={gotoTopWindow}>
              <Link to="/ContactUs">Contact Us</Link>
            </li>

            {/* <li>Sign up</li> */}
          </ul>

          {/* <div >
    <img src={avtar} className="avtar" alt="avtar" />
</div> */}
        </div>
      );
    } else {
      setLeftNav(
        <div className="nav-right">
          <ul className="nav-items">
            <li>
              <Link to="/AboutUs">BCA</Link>
            </li>
            <li>
              <Link to="/ContactUs">SEM 2</Link>
            </li>

            {/* <li>Sign up</li> */}
          </ul>

          <div>
            <img
              src={avtar}
              style={{ margin: 10 }}
              className="avtar"
              alt="avtar"
            />
          </div>
        </div>
      );
    }
  }, []);

  //  useEffect()

  const searchstyle = {
    width: "100%",
    border: "3px solid black",
    borderRadius: "30px",
    boxShadow: "0px 2px 5px #616161",
    backgroundColor: "#2B2828",
    color: "#5A5A5A",
    fontSize: "15px",
    padding: "15px 200px 15px 30px",
  };

  return (
    <div id="navbar">
      <div className="nav-left">
        <Link to="/">
          <div>
            <img src={logo} className="nav-logo" alt="logo" />
          </div>
        </Link>

        <div className="search">
          <div>
            <input
              type="text"
              style={searchstyle}
              placeholder="Search subject notes,video here"
            />
          </div>
          <div className="search-icon">
            <FaSearch style />
          </div>
        </div>
      </div>

      {leftNav}
      
      <div className="mobile-menu">
          {isActive ? (
            <GoThreeBars size="28px"
              onClick={() => {
                document.querySelector(".nav").style.right="0%";
                setIsActive(!isActive);
              }}
            />
          ) : (
            <RxCross2 size="28px"
              onClick={() => {
                document.querySelector(".nav").style.right="-100%";
                setIsActive(!isActive);
              }}
            />
          )}

        </div>
    </div>
  );
}

export default Navbar;
