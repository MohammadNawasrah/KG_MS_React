
import React, { useState } from "react";
import axios from "axios";
import withSessionTimeout from "../core/functions/withSessionTimeout";
import {
  addStudentApi,
  addStudentPage,
  loginPage,
} from "../core/data/static/staticData";
import controllNav from "../core/functions/controllerNav";
import Navbar from "../widget/navbar";

function AddStudentPage() {
  const pageName = addStudentPage;
  const filterLinks = controllNav(pageName);
  const linksNames = filterLinks.linkNames;
  const linkURLs = filterLinks.linkURLs;

  const [studentName, setStudentName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [SecondPhoneNumber, setSecondPhoneNumber] = useState("");
  const [nId, setNid] = useState("");

  const login = sessionStorage.getItem("loggedIn");
  if (!login) {
    sessionStorage.clear();
    window.location.href = loginPage;
  }

  const handleSubmit = async e => {

    e.preventDefault();

    const payload = {
      studentName: studentName,
      dateOfBarthday: dateOfBirth,
      phoneNumber: phoneNumber,
      phoneNumberSecond: SecondPhoneNumber, // Include SecondPhoneNumber in the payload
      nid: nId, // Include nId in the payload
    };

    try {
      const response = await axios.post(addStudentApi, payload);
      console.log("Data posted successfully:", response.data);
      // Clear form fields after successful submission
      setStudentName("");
      setDateOfBirth("");
      setPhoneNumber("");
      setSecondPhoneNumber("");
      setNid("");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return login ? (
    <div>
      <Navbar linkNames={linksNames} linkUrls={linkURLs}></Navbar>
      <div className="container mt-4">
        <h2>Add Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="studentName">Student Name:</label>
            <input
              type="text"
              id="studentName"
              className="form-control"
              value={studentName}
              required
              onChange={e => setStudentName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              id="dateOfBirth"
              className="form-control"
              value={dateOfBirth}
              required
              onChange={e => setDateOfBirth(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              className="form-control"
              value={phoneNumber}
              required
              onChange={e => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="SecondPhoneNumber">Second Phone Number:</label>
            <input
              type="text"
              id="SecondPhoneNumber"
              className="form-control"
              value={SecondPhoneNumber}
              required
              onChange={e => setSecondPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nId">National ID:</label>
            <input
              type="text"
              id="nId"
              className="form-control"
              value={nId}
              required
              onChange={e => setNid(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Student
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div></div>
  );
}


export default withSessionTimeout(AddStudentPage);
