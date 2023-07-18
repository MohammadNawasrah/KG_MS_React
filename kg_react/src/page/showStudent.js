import React, { useState } from "react";
import axios from "axios";
import withSessionTimeout from "../core/functions/withSessionTimeout";
import { addStudentApi, showStudentPage } from "../core/data/static/staticData";
import controllNav from "../core/functions/controllerNav";
import Navbar from "../widget/navbar";

async function fetchStudents() {
  try {
    const response = await axios.get(addStudentApi);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function ShowStudents() {
  const pageName = showStudentPage;
  const filterLinks = controllNav(pageName);
  const linksNames = filterLinks.linkNames;
  const linkURLs = filterLinks.linkURLs;
  const [students, setStudents] = useState([]);
  fetchStudents().then(data => {
    setStudents(data);
  });
  return (
    <div>
      <Navbar linkNames={linksNames} linkUrls={linkURLs}></Navbar>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Date of Birth</th>
            <th>Phone Number</th>
            <th>Teacher ID</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.studentName}</td>
              <td>{student.dateOfBarthday}</td>
              <td>{student.phoneNumber}</td>
              <td>{student.teacherId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default withSessionTimeout(ShowStudents);
