import React from 'react';
import "../static/css/admin.css";
import Navbar from "../widget/navbar";
import withSessionTimeout from '../core/functions/withSessionTimeout';
import {  loginPage } from '../core/data/static/staticData';
const AdminPanel = () => {
    
  const msg = sessionStorage.getItem('loggedIn');
//   const msg1 = sessionStorage.getItem('name');
  if (msg !== "ture") {
    window.location.href = loginPage; 
  }
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
                                <input type="file" class="form-control" id="stdEXL" />
                                <button type="button" class="btn btn-success" id='add'>إدخال الكل</button>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
            <div className="card mb-3" id='card'>
                <div className="card-body">
                    <div className="d-flex flex-column flex-lg-row">
                        <center>
                            <button type="button" class="btn btn-success" id='add'>معلومات الطلاب</button>
                        </center>
                    </div>
                </div>
            </div>
            <div className="card mb-3" id='card'>
                <div className="card-body">
                    <div className="d-flex flex-column flex-lg-row">

                        <center>
                            <button type="button" class="btn btn-success" id='add'>إضافة معلم</button>
                        </center>

                    </div>
                </div>
            </div>
            <div className="card mb-3" id='card'>
                <div className="card-body">
                    <div className="d-flex flex-column flex-lg-row">
                        <button type="button" class="btn btn-success" id='add'>عرض المعلمين</button>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default  withSessionTimeout(AdminPanel);



