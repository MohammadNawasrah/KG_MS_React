import React from 'react';
import { failurePage } from "../core/data/static/staticData";
import withSessionTimeout from '../core/functions/withSessionTimeout';
import "../static/css/successLogin.css";
const Successful = () => {
  const msg = sessionStorage.getItem('loggedIn');
  const msg1 = sessionStorage.getItem('name');
  if (msg === "ture") {
  
  }else
  window.location.href = failurePage; // Replace with your actual failure page URL
  return (
    <div>
      <h1 className='center-screen'>Hello Miss {msg1}</h1>
    </div>
  );
};

export default withSessionTimeout(Successful);
