import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

function Renew() {
	const navigate = useNavigate();

	useEffect(() => {
		const checkLogin = () => {
			if (!localStorage.getItem("auth_token")) {
				navigate("/login");
			}

			toast("Plan Expired! Please Renew", {
				theme: "dark",
				autoClose: 2000,
			});
		};
		checkLogin();
	});

	return (
		<>
			<Helmet>
				<title>PRAN - Renew</title>
			</Helmet>
			<ToastContainer />
			<div
				className="Renew"
				style={{
					display: "flex",
					height: "100vh",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Link to="/paymentQr">
					<button className="watchNow">Renew ₹10</button>
				</Link>
			</div>
		</>
	);
}

export default Renew;
