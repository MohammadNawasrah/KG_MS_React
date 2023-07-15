import React from 'react';
import "../static/css/admin.css";
import Navbar from "../widget/navbar";
import withSessionTimeout from '../core/functions/withSessionTimeout';
import {  addStudentPage, loginPage, showStudentPage } from '../core/data/static/staticData';
import handleFileUpload from '../core/functions/handleFileUpload';
const AdminPanel = () => {

  const msg = sessionStorage.getItem('loggedIn');
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
    return (
        <div className="container">
            <Navbar />
            <center><h3>administrator</h3></center>
            <div className="card mb-3" id='card'>
                <div className="card-body">
                    <div className="d-flex flex-column flex-lg-row">
                        <center>
                            <h4>
                                إدخال جميع الطلاب
                            </h4>
                            <div class="row">
                                <input type="file" class="form-control" id="stdEXL" onChange={handleFileUpload} />
                                <button type="button" class="btn btn-success" id='add'>إدخال الكل</button>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
            <div className="card mb-3" id='card'>
                <div className="card-body">
                    <div className="d-flex flex-column flex-lg-row">
               <button type="button" onClick={handleAddStudentClick}  class="btn btn-success" id='add'>add student</button>
                    </div>
                </div>
            </div>
            <div className="card mb-3" id='card'>
                <div className="card-body">
                    <div className="d-flex flex-column flex-lg-row">
               <button type="button" onClick={handleShowStudentClick}  class="btn btn-success" id='add'>show student</button>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default  withSessionTimeout(AdminPanel);


