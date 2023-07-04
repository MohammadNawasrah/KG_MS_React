import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginPage from './component/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SuccessPage from './component/success_login';
import FailurePage from './component/failed_login';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/success-page" element={<SuccessPage />} />
      <Route path="/failure-page" element={<FailurePage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
