import React from "react";
import "../static/css/login.css";
import Button from "../widget/customButton";
import LoginText from "../core/data/static/loginText";
import CustomInput from "../widget/customInput";
import LoginController from "../controller/loginController";
const LoginPage = () => {
  const handleSubmit = async event => {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    LoginController.login(username, password);
  };

  return (
    <div>
      <div className="kgLogo">
        <img src={LoginText.kgLogo} alt="logo"></img>
      </div>

      <form onSubmit={handleSubmit} className="formGroup">
        <CustomInput
          type={"text"}
          id={"username"}
          placeholder={LoginText.userNamePlaceholder}
        ></CustomInput>
        <CustomInput
          type={"password"}
          id={"password"}
          placeholder={LoginText.passwordPlaceholder}
        ></CustomInput>
        <Button text={LoginText.textButton} />
      </form>
    </div>
  );
};

export default LoginPage;
