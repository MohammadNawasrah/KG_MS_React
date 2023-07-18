import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  successPage,
  loginPage,
  failurePage,
  adminPanel,
  addStudentPage,
  showStudentPage,
} from "./core/data/static/staticData";
import LoginPage from "./page/login";
import SuccessPage from "./page/success_login";
import FailurePage from "./page/failed_login";
import AdminPanel from "./page/admin";
import AddStudent from "./page/addStudent";
import ShowStudent from "./page/showStudent";

const rootElement = document.getElementById("root");

const App = () => (
  <Router>
    <Routes>
      <Route path={"/"} element={<LoginPage />} />
      <Route path={loginPage} element={<LoginPage />} />
      <Route path={successPage} element={<SuccessPage />} />
      <Route path={failurePage} element={<FailurePage />} />

      <Route path={adminPanel} element={<AdminPanel />} />
      <Route path={addStudentPage} element={<AddStudent />} />
      <Route path={showStudentPage} element={<ShowStudent />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(rootElement).render(<App />);
