import React, { useState } from "react";
import axios from "axios";
import {  toast } from "react-toastify";
import { Helmet } from "react-helmet";
import contactImg from "../../Images/contact-us.png";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Spinner from "../Spinner";
function ContactUs() {
  const [loading, setLoading] = useState(false);
  const formHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    toast("Please Wait....",{
      theme:'dark',
      autoClose:2000,
    }
    );
    const name = e.target.name.value;
    const email = e.target.email.value;
    const title = e.target.title.value;
    const desc = e.target.desc.value;

    axios
      .post("/api/enquiry/sendEnquiry", {
        email,
        name,
        title,
        desc,
      })
      .then((res) => {
        setLoading(false);
        const { data } = res;
        alert(data.msg);
        if (data.msg === "Query sent Successfully"){
          window.location.reload();
        }
        // toast("Query sent Successfully", {
				// 	theme: "dark",
				// 	autoClose: 2000,
				// });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
		<>
			<Helmet>
				<title>PRAN - Contact</title>
			</Helmet>
			<Navbar />
			{loading ? <Spinner /> : ""}

			<div className="ContactUsContainer">
				<div className="ContactUsLBg">
					<img src={contactImg} alt="contact-img" data-aos="fade-up" />
				</div>
				<div className="ContactUsRBg"></div>

				<div className="ContactForm">
					<form onSubmit={formHandler}>
						<h2 data-aos="fade-up">Get In Touch Today</h2>
						<br />
						<div className="name-email">
							<div className="inputName" data-aos="fade-up">
								<label for="name">Name</label>
								<br />
								<input
									type="text"
									id="name"
									name="name"
									placeholder="John"
									required
								/>
							</div>
							<div className="inputEmail" data-aos="fade-up">
								<label for="email">Email</label>
								<br />
								<input
									type="email"
									name="email"
									placeholder="@gmail.com"
									id="email"
									required
								/>
							</div>
						</div>
						<br />

						<label for="title" data-aos="fade-up">
							Title
						</label>
						<br />
						<input
							type="text"
							id="title"
							name="title"
							placeholder="Title"
							required
							data-aos="fade-up"
						/>
						<br />
						<br />

						<label for="msg" data-aos="fade-up">
							Leave us a message
						</label>
						<br />
						<textarea
							id="msg"
							name="desc"
							placeholder="Please type your message here"
							required
							data-aos="fade-up"
						></textarea>
						<br />
						<br />

						<input
							type="submit"
							name="submit"
							value="Send Message"
							data-aos="fade-up"
						/>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default ContactUs;
