import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
axios.defaults.baseURL = "https://pran-app-backend.onrender.com"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
  <script src="bower_components/aos/dist/aos.js"></script> 

    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
