
import React from 'react';
import "../static/css/admin.css";
import Navbar from "../widget/navbar";
import selectFile from '../widget/selectFile';
// import withSessionTimeout from '../core/functions/withSessionTimeout';
import { loginPage } from '../core/data/static/staticData';
const Admin = () => {

    const lgoinSession = sessionStorage.getItem('loggedIn');
    // const nameOfUser = sessionStorage.getItem('name');
    if (lgoinSession === "ture") {

    } else {
        window.location.href = loginPage;
    }
    return (
        <div>
            <React.Fragment>
                <Navbar />
            </React.Fragment>
            <div className="container">
                <center><h3>administrator</h3></center>
                <div className="card mb-3" id='card'>
                    <div className="card-body">
                        <div className="d-flex flex-column flex-lg-row">
                            <center>
                                <from>
                                    <button type="button" class="btn" id='add' onClick={<selectFile />}>
                                        إدخال مجموعة طلاب
                                    </button>
                                </from>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" id='card'>
                    <div className="card-body">
                        <div className="d-flex flex-column flex-lg-row">
                            <center>
                                <button type="button" class="btn" id='add'>معلومات الطلاب</button>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" id='card'>
                    <div className="card-body">
                        <div className="d-flex flex-column flex-lg-row">
                            <center>
                                <button type="button" class="btn" id='add'>إضافة معلم</button>
                            </center>

                        </div>
                    </div>
                </div>
                <div className="card mb-3" id='card'>
                    <div className="card-body">
                        <div className="d-flex flex-column flex-lg-row">
                            <center>
                                <button type="button" class="btn" id='add'>عرض المعلمين</button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default Admin;
// export default withSessionTimeout(Admin);



