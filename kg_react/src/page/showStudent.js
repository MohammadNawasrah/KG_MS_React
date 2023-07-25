import React, { useState } from "react";
import axios from "axios";
import withSessionTimeout from "../core/functions/withSessionTimeout";
import { addStudentApi } from "../core/data/static/staticData";
import Navbar from "../widget/navbar";
import "../static/css/showStudent.css";

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
  const [students, setStudents] = useState([]);
  fetchStudents().then(data => {
    setStudents(data);
  });
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <h2>Student List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col">Student Name</th>
            <th className="col">Date of Birth</th>
            <th className="col">Phone Number</th>
            <th className="col">Teacher ID</th>
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
      <button type="button" class="btn btn-success" id="ExportExel">export to Exel file</button>
    </div>
  );
}

export default withSessionTimeout(ShowStudents);
