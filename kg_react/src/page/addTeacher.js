import React, { useState } from "react";
import axios from "axios";
import Navbar from "../widget/navbar";
import controllNav from "../core/functions/controllerNav";
import checkSession from "../core/functions/checkSession";
import DataFromApi from "../core/data/static/dataFromApi";
import LinksReact from "../core/data/static/linksReact";

const AddTeacher = () => {
  const login = checkSession();
  const [teacherName, setTeacherName] = useState("");
  const [teacherUserName, setTeacherUserName] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");
  const pageName = LinksReact.addTeacher;
  const filterLinks = controllNav(pageName);
  const linksNames = filterLinks.linkNames;
  const linkURLs = filterLinks.linkURLs;
  const [responseAddTeacher, setResponseAddTeacher] = useState("");

  const handleFormSubmit = async e => {
    e.preventDefault();
    const newTeacher = {
      teacherName,
      teacherUserName,
      teacherPassword,
    };
    console.log(responseAddTeacher);
    try {
      const response = await axios.post(DataFromApi.addTeacherApi, newTeacher);
      setResponseAddTeacher(response.data);
      alert(response.data); // Show the response from the server in the alert

      // Reset input fields after successful form submission
      setTeacherName("");
      setTeacherUserName("");
      setTeacherPassword("");
    } catch (error) {
      console.error("Error adding teacher:", error);
    }
  };

  return login ? (
    <div>
      <React.Fragment>
        <Navbar linkNames={linksNames} linkUrls={linkURLs} />
      </React.Fragment>
      <div className="container mt-4">
        <h2>Add Teacher</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              value={teacherName}
              onChange={e => setTeacherName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              className="form-control"
              value={teacherUserName}
              onChange={e => setTeacherUserName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              value={teacherPassword}
              onChange={e => setTeacherPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Teacher
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default AddTeacher;
