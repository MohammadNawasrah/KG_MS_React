import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  successPage,
  loginPage,
  attendancePage,
  adminPanel,
  addStudentPage,
  showStudentPage,
  addTeacher,
} from "./core/data/static/staticData";
import LoginPage from "./page/login";
import SuccessPage from "./page/success_login";
import AttendancePage from "./page/attendancePage";
import AdminPanel from "./page/admin";
import AddStudent from "./page/addStudent";
import ShowStudent from "./page/showStudent";
import AddTeacher from "./page/addTeacher";

// const root=ReactDOM.create
ReactDOM.render(
  <Router>
    <Routes>
      <Route path={loginPage} element={<LoginPage />} />
      <Route path={successPage} element={<SuccessPage />} />
      <Route path={attendancePage} element={<AttendancePage />} />
      <Route path={adminPanel} element={<AdminPanel />} />
      <Route path={addStudentPage} element={<AddStudent />} />
      <Route path={showStudentPage} element={<ShowStudent />} />
      <Route path={addTeacher} element={<AddTeacher />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
