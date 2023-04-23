import React, { useEffect, useState } from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillGridFill, BsMessenger, BsPeopleFill } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { MdWifiCalling3 } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function LeftNavbar() {
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = () => {
      if (!localStorage.getItem("auth_token")) {
        navigate("/login");
      }
    };
    checkLogin();
  });

  return (
    <>
      <div className="leftNavbarTopContainer">
        <div className="leftNavbarContainer">
          <ul>
            <div className="leftNavbar">
              <div className="upperSection">
                <div className="leftNavbarItem">
                  <AiTwotoneHome size="20px" color="#5B5B5B" /> <li>Home</li>
                </div>

                <div className="leftNavbarItem">
                  <BsFillGridFill size="20px" color="#5B5B5B" /> <li>Menu</li>
                </div>

                <div className="leftNavbarItem">
                  <GiNotebook size="20px" color="#5B5B5B" /> <li>Notes</li>
                </div>

                <div className="leftNavbarItem">
                  <BsMessenger size="20px" color="#5B5B5B" /> <li>Chats</li>
                </div>

                <div className="leftNavbarItem">
                  <BsPeopleFill size="20px" color="#5B5B5B" /> <li>About Us</li>
                </div>

                <div className="leftNavbarItem">
                  <MdWifiCalling3 size="20px" color="#5B5B5B" />{" "}
                  <li>Contact Us</li>
                </div>
              </div>

              <div className="lowerSection">
                <div
                  onClick={() => {
                    localStorage.clear();
                    setLogin(false);
                  }}
                  className="leftNavbarItem"
                >
                  <RiLogoutBoxRFill size="20px" color="#5B5B5B" />{" "}
                  <li>Logout Us</li>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default LeftNavbar;
