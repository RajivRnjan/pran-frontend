import React from "react";
import { SlNote } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
import Navbar from "../Navbar";
import Footer from "../Footer";

function ContactUs() {
  return (
    <>
    <Navbar/>
      <div className="ContactUsBackgroundImg">
        <div className="ContactUsTopContainer">
          <div className="ContactUs">
            <div className="ContactUsHeading">
              <h2>Share Your Queries</h2>
            </div>

            <div className="ContactUsForm">
              <form>
                <div className="input-container">
                  <input type="text" placeholder="Title:" name="title" />{" "}
                  <SlNote size="20px" color="#5B5B5B" />
                </div>

                <div className="input-container">
                  <input type="email" placeholder="E-mail:" name="email" />{" "}
                  <MdEmail size="25px" color="#5B5B5B" />
                </div>
                <br />

                <label>Description</label>
                <br />
                <textarea
                  placeholder="Illaborate the issue......................."
                  name="description"
                  rows={8}
                ></textarea>
                <br />

                <button className="contactUsSend">Send</button>
              </form>
            </div>
          </div>

          <div className="ContactUsDesc">
            <h4>Get in touch:</h4>
            <p>E-mail: pran7181@gmail.com</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ContactUs;
