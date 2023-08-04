import React from "react";
import { Link } from "react-router-dom";
import Error from "../../Images/Error.png";
import Navbar from "../Navbar";
import Footer from "../Footer";

function ErrorPage() {
  return (
    <>
    <Navbar/>
      <div className="ErrorContainer">
        <div className="ErrorImage">
          <img src={Error} alt="Error" />
        </div>
        <div className="ErrorDesc">
          <p>
            A 404 error page is a web page designated to be displayed when a
            request triggers the HTTP 404 response code.
          </p>
        </div>
        <div className="GotoHomebtn">
          <Link to="/">
            <button>Go to Home Page</button>
          </Link>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ErrorPage;
