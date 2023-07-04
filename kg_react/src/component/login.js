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

    try {
      const response = await axios.post('http://localhost:8080/logins', { username, password });

      if (response.status === 'Login successful') {
        // useHistory.push("./success_login.js");
        window.location.href = './success_login.js'; // Replace with your actual success page URL
      } else {
        // useHistory.push("./failed_login.js");
        window.location.href = './failed_login.js'; // Replace with your actual failure page URL
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="col d-flex justify-content-center text-center colText text-white" style={{ flex: 5 }}>
          اسم الروضه
        </div>
      </nav>
      <form onSubmit={handleSubmit}>
        <div className="container loginForm" id="loginForm">
          <form action="/login" method="post">
            <div className="text-center mb-5">
              <h1 className="h3 mb-3 font-weight-normal textAlert">تسجيل الدخول</h1>
            </div>
            <div className="form-label-group">

              <input
                type="text"
                name="username"
                id="inputUsername"
                onSubmit={handleusernameChange}
                className="form-control userName"
                placeholder="اسم المستخدم"
                required
                autoFocus
              />
            </div>
            <div className="form-label-group mt-3">
              <input
                type="password"
                name="password"
                id="inputPassword"
                onSubmit={handlePasswordChange}
                className="form-control password"
                placeholder="الرقم السري"
                required
              />
            </div>
            <button className="upB" type="submit" name="login" data-toggle="collapse" href="#collapseExample">
              دخول
            </button>
          </form>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
