import React, { useState } from 'react';
import "./CSS/login_style.css";

import axios from 'axios';
// import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const handleusernameChange = (event) => {
    setusername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post('http://localhost:8080/logins', { username, password });
    console.log(response.data)
    if (response.data === 'Login successful') {
      // useHistory.push("./success_login.js");
      window.location.href = '/success-page'; // Replace with your actual success page URL
    } else if (response.data === 'Invalid credentials') {
      // useHistory.push("./failed_login.js");
      window.location.href = '/failure-page'; // Replace with your actual failure page URL
    }
  };

  return (
    <div>
      {/* Main Content */}
      <div className="container-fluid">
        <div className="row main-content bg-success text-center">
          <div className="col-md-4 text-center company__info">
            <span className="company__logo">
              <h2>
                <span className="fa fa-android"></span>
              </h2>
            </span>
            {/* image */}
            <h4 className="company_title">شعار الروضة</h4>
          </div>
          <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div className="container-fluid">
              <div className="row">
                <h2 id='title text'>اسم الروضة</h2>
              </div>
              <div className="row">
                <form onSubmit={handleSubmit} className="form-group">
                    {/* username */}
                  <div className="row" id='username'>
                    <input
                      onSubmit={handleusernameChange}
                      type="text"
                      name="username"
                      id="username"
                      className="form__input"
                      placeholder="إسم المستخدم"
                    />
                  </div>
                  {/* password */}
                  <div className="row">
                    <input
                      onSubmit={handlePasswordChange}
                      type="password"
                      name="password"
                      id="password"
                      className="form__input"
                      placeholder="كلمة المرور"
                    />
                  </div>
                  {/* login button */}
                  <div className="row" id="login">
                    <button value="Submit" className="btn">تسجيل الدخول</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LoginPage;
