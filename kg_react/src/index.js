import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './page/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { successPage, loginPage, failurePage, adminPage } from "./core/data/static/staticData";
import SuccessPage from './page/success_login';
import FailurePage from './page/failed_login';
import AdminPage from './page/admin';
// import Navbar from './widget/navbar';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path={"/"} element={<LoginPage />} />
      <Route path={loginPage} element={<LoginPage />} />
      <Route path={successPage} element={<SuccessPage />} />
      <Route path={failurePage} element={<FailurePage />} />
      <Route path={adminPage} element={<AdminPage />} />
      {/* <Route path={navbar} element={<Navbar />}/> */}
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

