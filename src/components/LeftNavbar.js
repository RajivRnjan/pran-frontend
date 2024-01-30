import React, { useEffect, useState } from "react";
import { NavLink,link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillGridFill,BsFillCalendarMinusFill, BsMessenger, BsPeopleFill } from "react-icons/bs";
import { GiNotebook,GiStabbedNote } from "react-icons/gi";
import { MdWifiCalling3 } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
function LeftNavbar() {
  const gotoTopWindow = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const [login, setLogin] = useState(true);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = () => {
      if (!localStorage.getItem("auth_token")) {
        navigate("/login");
      }
    };
    checkLogin();
  });

   //GET HOLIDAY LIST
   const holidayHandler = () => {
    toast("Please Wait...",{
      theme:'dark',
      autoClose:2000,
    })

    setLoading(true);
   

    axios
      .get("/api/resource/getHoliday", {
        headers: {
          Authorization: "auth " + localStorage.getItem("auth_token"),
        },
      })
      .then((response) => {
        const { data } = response;
        window.open(data.holiday.link, "_self");
        console.log(data)
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err)
       });
  };
  // GET SYLLABUS

  const [syllabus, setSyllabus] = useState("");

  const syllabusHandler = () => {
    toast("Please Wait...",{
      theme:'dark',
      autoClose:2000,
    })

 
    // console.log(e.target.innerText);
    setLoading(true);

    axios
      .get(
        "/api/resource/getSyllabus",

        {
          headers: {
            Authorization: "auth " + localStorage.getItem("auth_token"),
          },
        }
      )
      .then((response) => {
        setLoading(false);
        const { data } = response;
      
        setSyllabus(data.syllabus.link);
       
        window.open(data.syllabus.link, "_self");
      })
      .catch((err) => {
        console.log(err)
        setLoading(false);
      });

    // window.open(syllabus,"_self")
  };

  return (
    <>
    <ToastContainer/>
      <div className="leftNavbarTopContainer">
        <div className="leftNavbarContainer">
          <ul>
            <div className="leftNavbar">
              <div className="upperSection">
              <NavLink to="/"><div className="leftNavbarItem" onClick={gotoTopWindow}>
              <AiTwotoneHome size="20px" color="#5B5B5B" className="lefnavicon" /> <li>Home</li>
                </div></NavLink>

                

                <NavLink to="/notes"><div className="leftNavbarItem" onClick={gotoTopWindow}>
                  <GiNotebook size="20px" color="#5B5B5B" /> <li>Notes</li>
                </div></NavLink>

                

                <div className="leftNavbarItem" onClick={()=>{holidayHandler();gotoTopWindow()}} >
                  <BsFillCalendarMinusFill size="17px" color="#5B5B5B" /> <li>Holiday</li>
                </div>
                <div className="leftNavbarItem" onClick={()=>{syllabusHandler();gotoTopWindow()}} >
                  <GiStabbedNote size="20px" color="#5B5B5B" /> <li>Syllabus</li>
                </div>

                <NavLink to="/AboutUs"><div className="leftNavbarItem" onClick={gotoTopWindow} >
                  <BsPeopleFill size="20px" color="#5B5B5B" /> <li>About Us</li>
                </div></NavLink>

                <NavLink to="/ContactUs"><div className="leftNavbarItem" onClick={gotoTopWindow}>
                  <MdWifiCalling3 size="20px" color="#5B5B5B" />{" "}
                  <li>Contact Us</li>
                </div></NavLink>
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
                  <li>Logout </li>
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
