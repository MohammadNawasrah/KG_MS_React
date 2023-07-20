import React from "react";
import "../static/css/admin.css";
import Navbar from "../widget/navbar";

import withSessionTimeout from "../core/functions/withSessionTimeout";

import {
  addStudentPage,
  addTeacher,
  adminPanel,
  loginPage,
  showStudentPage,
  studentDistributionApi,
} from "../core/data/static/staticData";
import handleFileUpload from "../core/functions/handleFileUpload";
import axios from "axios";
import controllNav from "../core/functions/controllerNav";
const AdminPanel = () => {
  const pageName = adminPanel;
  const filterLinks = controllNav(pageName);
  const linksNames = filterLinks.linkNames;
  const linkURLs = filterLinks.linkURLs;
  const msg = sessionStorage.getItem("loggedIn");
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
  const handleAddTeacher = async event => {
    window.location.href = addTeacher;
  };
  return (
    <div>
      <React.Fragment>
        <Navbar linkNames={linksNames} linkUrls={linkURLs} />
      </React.Fragment>
      <div className="container">
        <center>
          <h3>administrator</h3>
        </center>
        <div className="card mb-3" id="card">
          <div className="card-body">
            <div className="d-flex flex-column flex-lg-row">

              {/* <h4>إدخال جميع الطلاب</h4> */}
              <div id="row">
                <input
                  type="file"
                  className="form-control"
                  id="stdEXL"
                  onChange={handleFileUpload}
                />
                <button type="button" className="btn" id="add">
                  رفع ملف الطلاب
                </button>
              </div>

            </div>
          </div>
        </div>
        <div className="card mb-3" id="card">
          <div className="card-body">
            <button
              type="button"
              onClick={handleAddStudentClick}
              className="btn"
              id="add"
            >
              add student
            </button>
          </div>
        </div>
        <div className="card mb-3" id="card">
          <div className="card-body">
            <div className="d-flex flex-column flex-lg-row">
              <button
                type="button"
                onClick={handleShowStudentClick}
                className="btn"
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
                className="btn"
                id="add"
              >
                توزيع الطلاب
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3" id="card">
        <div className="card-body">
          <div className="d-flex flex-column flex-lg-row">
            <button
              type="button"
              onClick={handleAddTeacher}
              className="btn btn-success"
              id="add"
            >
              add teacher
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withSessionTimeout(AdminPanel);
