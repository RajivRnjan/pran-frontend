import React from 'react'
import LeftNavbar from "../LeftNavbar"
import TopNavbar from '../TopNavbar'
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';

function Home() {
   
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
<TopNavbar/>
<LeftNavbar/>
</>
  )
}

export default Home