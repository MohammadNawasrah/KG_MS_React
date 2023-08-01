import React from "react";
import "../static/css/login.css";

import Button from "../widget/customButton";

import logo from "../static/img/test.png";
import fromLoginTo from "../core/router/fromLoginTo";
const LoginPage = () => {
  const handleSubmit = async event => {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    fromLoginTo(username, password);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row main-content text-center">
          <div className="col-md-4 text-center company__info">
            <span className="company__logo">
              <h2>
                <span className="fa fa-android"></span>
              </h2>
            </span>
            <img src={logo} alt="logo"></img>
          </div>
          <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div className="container-fluid">
              <div className="row">
                <h2 id="title text">طلائع الامل</h2>
              </div>
              <div className="row">
                <form onSubmit={handleSubmit} className="form-group">
                  <div className="row">
                    <input
                      type="text"
                      id="username"
                      className="form__input"
                      placeholder="إسم المستخدم"
                    />
                  </div>
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
