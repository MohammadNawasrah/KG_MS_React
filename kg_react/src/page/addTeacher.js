import React, { useState } from "react";
import axios from "axios";
import { addTeacher, addTeacherApi } from "../core/data/static/staticData";
import Navbar from "../widget/navbar";
import controllNav from "../core/functions/controllerNav";

const AddTeacher = () => {
  const [teacherName, setTeacherName] = useState("");
  const [teacherUserName, setTeacherUserName] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");
  const pageName = addTeacher;
  const filterLinks = controllNav(pageName);
  const linksNames = filterLinks.linkNames;
  const linkURLs = filterLinks.linkURLs;
  const handleFormSubmit = async e => {
    e.preventDefault();
    const newTeacher = {
      teacherName,
      teacherUserName,
      teacherPassword,
    };

    try {
      await axios.post(addTeacherApi, newTeacher); // Assuming your Java API endpoint for adding a teacher is "/api/teachers"
      alert("Teacher added successfully!");
      // You can redirect the user to a different page or perform other actions after adding the teacher.
    } catch (error) {
      console.error("Error adding teacher:", error);
      alert("Failed to add teacher. Please check the console for details.");
    }
  };
  return (
    <div>
      <React.Fragment>
        <Navbar linkNames={linksNames} linkUrls={linkURLs} />
      </React.Fragment>
      <h2>Add Teacher</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={teacherName}
            onChange={e => setTeacherName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={teacherUserName}
            onChange={e => setTeacherUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={teacherPassword}
            onChange={e => setTeacherPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Add Teacher</button>
        </div>
      </form>
    </div>
  );
};

export default AddTeacher;
