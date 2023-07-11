import React from 'react';
import "../static/css/login.css";
import splitAfterKeyword from '../core/functions/stringFunction';
import { failurePage, loginApiUrl ,successPage } from "../core/data/static/staticData";

import Button from "../widget/customButton";
import axios from 'axios';

const LoginPage = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();

    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    const response = await axios.post(loginApiUrl, { username, password });

    const name = splitAfterKeyword(response.data, "name");
console.log(response.data)
    if (response.data === 'success login name'+name) {
      sessionStorage.setItem('loggedIn', 'ture');
      sessionStorage.setItem('name',name)
      window.location.href = successPage; 
    } else if (response.data === 'Invalid credentials') {
      window.location.href = failurePage; 
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
                  <div className="row" >
                    <input
                      type="text"
                      id="username"
                      className="form__input"
                      placeholder="إسم المستخدم"
                    />
                  </div>
                  {/* password */}
                  <div className="row">
                    <input
                      type="password"
                      id="password"
                      className="form__input"
                      placeholder="كلمة المرور"
                    />
                  </div>
                  <div className="row" id="login">
                    <Button text="دخول" className="loginBtn" />
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
