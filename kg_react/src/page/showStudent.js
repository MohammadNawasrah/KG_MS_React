import React, { useState } from "react";
import axios from "axios";
import withSessionTimeout from "../core/functions/withSessionTimeout";
import { addStudentApi } from "../core/data/static/staticData";

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
