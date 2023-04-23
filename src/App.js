import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar';
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import LeftNavbar from "./components/LeftNavbar";
import Footer from "./components/Footer";
import ContactUs from "./components/pages/ContactUs";
import AboutUs from "./components/pages/AboutUs";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Terms from "./components/pages/Terms";
import ErrorPage from "./components/pages/ErrorPage"

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route exact path="/Terms" element={<Terms />} />
          <Route exact path="/home" element={<LeftNavbar />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
