
import OneSignal from 'react-onesignal';
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";

import ContactUs from "./components/pages/ContactUs";
import AboutUs from "./components/pages/AboutUs";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Terms from "./components/pages/Terms";
import ErrorPage from "./components/pages/ErrorPage";
import { useEffect } from "react";
import Home from "./components/pages/Home";
import Notes from "./components/pages/Notes";
import PdfViewer from "./components/PdfViewer";
import ForgotPassword from "./components/ForgotPassword";
import ChangePassword from "./components/ChangePassword";
import MyProfile from "./components/MyProfile";
import MyAccount from "./components/pages/MyAccount";
import YoutubeViewer from "./components/YoutubeViewer";
import PaymentQr from "./components/PaymentQr";
import TransactionHistory from "./components/TransactionHistory";

import aos from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Renew from './components/pages/Renew';
// import { Toast } from "react-toastify/dist/components";

function App() {
  useEffect(() => {
    aos.init({ duration: 1500 });
  }, []);
  <ToastContainer
  position="top-right"
  autoClose={2000}
  limit={2}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
/>

// ONE SIGNAL

const [initialized, setInitialized] = useState(false);
OneSignal.init({ appId: 'e29c6fe6-e8c2-4458-a6f5-a2ea4fe72d22'}).then(() => {
  setInitialized(true);
  OneSignal.Slidedown.promptPush();
  // do other stuff
})
 

  return (
    <>
    
      {/* <ToastContainer/> */}

      <HashRouter>
        <Routes>
          {/* <Route exact path="/" element={<Login />} /> */}
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/forgot" element={<ForgotPassword />} />
          <Route exact path="/changePassword" element={<ChangePassword />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/myAccount" element={<MyAccount />} />
          <Route exact path="/myProfile" element={<MyProfile />} />
          <Route exact path="/paymentQr" element={<PaymentQr />} />
          <Route exact path="/renew" element={<Renew />} />
          <Route exact path="/transaction" element={<TransactionHistory />} />
          <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route exact path="/Terms" element={<Terms />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/notes" element={<Notes />} />
          <Route exact path="/pdfViewer/:id" element={<PdfViewer />} />
          <Route exact path="/youtubeViewer/:id" element={<YoutubeViewer />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
