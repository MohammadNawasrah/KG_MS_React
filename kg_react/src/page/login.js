import React from "react";
import "../static/css/login.css";
import splitAfterKeyword from "../core/functions/stringFunction";
import {
  adminPanel,
  failurePage,
  loginApiUrl,
} from "../core/data/static/staticData";

import Button from "../widget/customButton";
import axios from "axios";
import logo from "../static/img/test.png";
const LoginPage = () => {
  const handleSubmit = async event => {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    const response = await axios.post(loginApiUrl, { username, password });
    var name;
    if (response.data["requestUsername"].includes("admin"))
      name = splitAfterKeyword(response.data["requestUsername"], "admin");
    else name = splitAfterKeyword(response.data["requestUsername"], "name");
    console.log(response.data);
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("data", JSON.stringify(response.data["students"]));
    if (response.data["requestUsername"] === "success login admin" + name) {
      window.location.href = adminPanel;
    } else if (
      response.data["requestUsername"] ===
      "success login name" + name
    ) {
      window.location.href = failurePage;
    }
  };

  return (
    <div>
      {/* Main Content */}
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
                  {/* username */}
                  <div className="row">
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
