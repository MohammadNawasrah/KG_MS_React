import React from "react";
import "../static/css/admin.css";
import Navbar from "../widget/navbar";

import withSessionTimeout from "../core/functions/withSessionTimeout";

import {
  addStudentPage,
  loginPage,
  showStudentPage,
  studentDistributionApi,
} from "../core/data/static/staticData";
import handleFileUpload from "../core/functions/handleFileUpload";
import axios from "axios";
const AdminPanel = () => {
  const msg = sessionStorage.getItem("loggedIn");
  //   const msg1 = sessionStorage.getItem('name');
  if (msg !== "ture") {
    window.location.href = loginPage;
  }
  const handleAddStudentClick = () => {
    window.location.href = addStudentPage;
  };
  const handleShowStudentClick = () => {
    window.location.href = showStudentPage;
  };
  const handleStudentDistribution = async event => {
    const response = await axios.post(studentDistributionApi);
    console.log(response.data);
  };
  return (
    <div className="container">
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <center>
        <h3>administrator</h3>
      </center>
      <div className="card mb-3" id="card">
        <div className="card-body">
          <div className="d-flex flex-column flex-lg-row">
            <center>
              <h4>إدخال جميع الطلاب</h4>
              <div className="row">
                <input
                  type="file"
                  className="form-control"
                  id="stdEXL"
                  onChange={handleFileUpload}
                />
                <button type="button" className="btn btn-success" id="add">
                  إدخال الكل
                </button>
              </div>
            </center>
          </div>
        </div>
      </div>
      <div className="card mb-3" id="card">
        <div className="card-body">
          <div className="d-flex flex-column flex-lg-row">
            <button
              type="button"
              onClick={handleAddStudentClick}
              className="btn btn-success"
              id="add"
            >
              add student
            </button>
          </div>
        </div>
      </div>
      <div className="card mb-3" id="card">
        <div className="card-body">
          <div className="d-flex flex-column flex-lg-row">
            <button
              type="button"
              onClick={handleShowStudentClick}
              className="btn btn-success"
              id="add"
            >
              show student
            </button>
          </div>
        </div>
      </div>
      <div className="card mb-3" id="card">
        <div className="card-body">
          <div className="d-flex flex-column flex-lg-row">
            <button
              type="button"
              onClick={handleStudentDistribution}
              className="btn btn-success"
              id="add"
            >
              توزيع الطلاب
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withSessionTimeout(AdminPanel);
