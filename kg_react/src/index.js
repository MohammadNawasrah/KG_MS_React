import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { successPage, loginPage, failurePage,adminPanel } from "./core/data/static/staticData";
import LoginPage from './page/login';
import SuccessPage from './page/success_login';
import FailurePage from './page/failed_login';
import AdminPanel from './page/admin';

// const root=ReactDOM.create
ReactDOM.render(
  <Router>
    <Routes>
      <Route path={loginPage} element={<LoginPage />} />
      <Route path={successPage} element={<SuccessPage />} />
      <Route path={failurePage} element={<FailurePage />} />
      <Route path={adminPanel} element={<AdminPanel />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);


