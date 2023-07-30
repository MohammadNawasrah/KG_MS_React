import React, { useEffect, useState } from "react";
import {
  addStudentApi,
  addStudentPage,
  getLimitYears,
} from "../core/data/static/staticData";
import controllNav from "../core/functions/controllerNav";
import Navbar from "../widget/navbar";
import axiosGet from "../core/functions/axiosGet";
import axiosPost from "../core/functions/axiosPost";
import checkSession from "../core/functions/checkSession";

function AddStudentPage() {
  const pageName = addStudentPage;
  const filterLinks = controllNav(pageName);
  const linksNames = filterLinks.linkNames;
  const linkURLs = filterLinks.linkURLs;

  const [studentName, setStudentName] = useState("");
  const [dayOfBirth, setDayOfBirth] = useState("");
  const [monthOfBirth, setMonthOfBirth] = useState("");
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [SecondPhoneNumber, setSecondPhoneNumber] = useState("");
  const [nId, setNid] = useState("");
  const [comments, setComments] = useState("");

  const login = checkSession();
  const [yearsFromDatabase, setYearsFromDatabase] = useState([]);
  useEffect(() => {
    fetchYearsFromApi();
  }, []);

  const fetchYearsFromApi = async () => {
    setYearsFromDatabase(await axiosGet(getLimitYears, ""));
  };
  const resetAlldata = () => {
    setStudentName("");
    setDayOfBirth("");
    setMonthOfBirth("");
    setYearOfBirth("");
    setPhoneNumber("");
    setSecondPhoneNumber("");
    setNid("");
    setComments("");
  };
  const getFormData = () => {
    const dateOfBirth = `${yearOfBirth}-${monthOfBirth}-${dayOfBirth}`;
    const formData = {
      studentName: studentName,
      dateOfBarthday: dateOfBirth,
      phoneNumber: phoneNumber,
      phoneNumberSecond: SecondPhoneNumber,
      nid: nId,
    };
    return formData;
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const response = await axiosPost(addStudentApi, getFormData());
    if (response !== "error") {
      resetAlldata();
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
            <label htmlFor="dateInput">Date of Birth:</label>
            <input
              type="date"
              id="dateInput"
              value={
                yearOfBirth && monthOfBirth && dayOfBirth
                  ? `${yearOfBirth}-${monthOfBirth}-${dayOfBirth}`
                  : ""
              }
              min={yearsFromDatabase[0]}
              max={yearsFromDatabase[yearsFromDatabase.length - 1]}
              onChange={e => {
                const dateValue = e.target.value;
                if (dateValue) {
                  const [year, month, day] = dateValue.split("-");
                  setYearOfBirth(year);
                  setMonthOfBirth(month);
                  setDayOfBirth(day);
                } else {
                  setYearOfBirth("");
                  setMonthOfBirth("");
                  setDayOfBirth("");
                }
              }}
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

          <div className="form-group">
            <label htmlFor="comments">Comments:</label>
            <textarea
              id="comments"
              className="form-control"
              value={comments}
              onChange={e => setComments(e.target.value)}
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

export default AddStudentPage;
