import React, { useEffect, useState } from "react";
import axios from "axios";
import withSessionTimeout from "../core/functions/withSessionTimeout";
import {
  getStudentsAndTeachers,
  showStudentPage,
} from "../core/data/static/staticData";
import controllNav from "../core/functions/controllerNav";
import Navbar from "../widget/navbar";
import * as XLSX from "xlsx";

function ShowStudents() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacherUsername, setSelectedTeacherUsername] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.post(getStudentsAndTeachers);
      setStudents(response.data["students"]);
      setTeachers(response.data["teachers"]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTeacherSelectChange = event => {
    const selectedUsername = event.target.value;
    setSelectedTeacherUsername(selectedUsername);

    const selectedTeacher = teachers.find(
      teacher => teacher.teacherUserName === selectedUsername
    );
    if (selectedTeacher) {
      const teacherId = selectedTeacher.teacherId;
      const filteredStudentsByTeacher = students.filter(
        student => student.teacherId === teacherId
      );
      setFilteredStudents(filteredStudentsByTeacher);
    } else {
      setFilteredStudents([]);
    }
  };

  const handleExportToExcel = () => {
    let teacherName = "All_Teachers"; // Default name for the file
    if (selectedTeacherUsername !== "") {
      // If a teacher is selected, use their name as the filename
      const selectedTeacher = teachers.find(
        teacher => teacher.teacherUserName === selectedTeacherUsername
      );
      if (selectedTeacher) {
        teacherName = selectedTeacher.teacherName.replace(" ", "_");
        const teacherId = selectedTeacher.teacherId;
        const filteredStudentsByTeacher = students.filter(
          student => student.teacherId === teacherId
        );
        exportToExcel(filteredStudentsByTeacher, teacherName);
      }
    } else {
      // If no teacher is selected, export data for all teachers with default filename
      exportToExcel(students, teacherName);
    }
  };

  const exportToExcel = (data, teacherName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    XLSX.writeFile(workbook, `${teacherName}_student_data.xlsx`);
  };

  const pageName = showStudentPage;
  const filterLinks = controllNav(pageName);
  const linksNames = filterLinks.linkNames;
  const linkURLs = filterLinks.linkURLs;

  return (
    <div>
      <Navbar linkNames={linksNames} linkUrls={linkURLs} />
      <div className="container mt-4">
        <h2>Student List</h2>
        <div className="row mb-3">
          <div className="col-md-4">
            <select
              className="form-select"
              onChange={handleTeacherSelectChange}
              value={selectedTeacherUsername}
            >
              <option value="">Select a teacher</option>
              {teachers.map(teacher => (
                <option key={teacher.teacherId} value={teacher.teacherUserName}>
                  {teacher.teacherUserName}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-primary"
              onClick={handleExportToExcel}
              disabled={teachers.length === 0 && selectedTeacherUsername === ""}
            >
              Export to Excel
            </button>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Date of Birth</th>
                <th>Phone Number</th>
                <th>Second Phone Number</th>
                <th>national id</th>
                <th>Teacher Name</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map(student => (
                <tr key={student.studentId}>
                  <td>{student.studentName}</td>
                  <td>{student.dateOfBarthday}</td>
                  <td>{student.phoneNumberSecond}</td>
                  <td>{student.nid}</td>
                  <td>{student.phoneNumber}</td>
                  <td>
                    {teachers.find(
                      teacher => teacher.teacherId === student.teacherId
                    )?.teacherName || "Unknown"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default withSessionTimeout(ShowStudents);
