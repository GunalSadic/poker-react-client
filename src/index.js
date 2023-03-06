import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RegistrationPage from './Components/RegistrationPage';
import LoginPage from './Components/LoginPage';
import NavigationBar from './Components/NavigationBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style = 'background-color: rgb(231 143 39 / 0.28 ) '
root.render(
  <React.StrictMode>
   <NavigationBar></NavigationBar>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
