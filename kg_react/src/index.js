import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./page/login";
import SuccessPage from "./page/success_login";
import AttendancePage from "./page/attendancePage";
import AdminPanel from "./page/admin";
import AddStudent from "./page/addStudent";
import ShowStudent from "./page/showStudent";
import AddTeacher from "./page/addTeacher";
import Test from "./test/test";
import LinksReact from "./core/data/static/linksReact";

// const root=ReactDOM.create
ReactDOM.render(
  <Router>
    <Routes>
      <Route path={LinksReact.loginPage} element={<LoginPage />} />
      <Route path={LinksReact.successPage} element={<SuccessPage />} />
      <Route path={LinksReact.attendancePage} element={<AttendancePage />} />
      <Route path={LinksReact.adminPanel} element={<AdminPanel />} />
      <Route path={LinksReact.addStudentPage} element={<AddStudent />} />
      <Route path={LinksReact.showStudentPage} element={<ShowStudent />} />
      <Route path={LinksReact.addTeacher} element={<AddTeacher />} />
      <Route path={"/test"} element={<Test />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
