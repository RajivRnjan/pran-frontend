
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import LeftNavbar from './components/LeftNavbar';
import Footer from './components/Footer';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import Terms from './components/pages/Terms';



function App() {
  return (
    <>
    <BrowserRouter>     
    <Navbar/>
     <Routes>
      <Route exact path ="/Login" element={<Login/>} />
     <Route exact path="/" element={<Signup/>} />
     <Route exact path='/ContactUs' element={<ContactUs/>}/>
     <Route exact path='/AboutUs' element={<AboutUs/>}/>
     <Route exact path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
     <Route exact path='/Terms' element={<Terms/>}/>
     <Route exact path="/home" element={<LeftNavbar/>} />

     
     
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
    
  );
}

export default App;
