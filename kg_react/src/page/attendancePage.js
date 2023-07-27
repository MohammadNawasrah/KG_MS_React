import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  getIsLogin,
  getStudentsForEachTeacher,
  lastDateUpdate,
  loginPage,
  removeLogin,
  updateAttendance,
} from "../core/data/static/staticData";

const AttendancePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [students, setStudents] = useState([]);
  const urlParams = new URLSearchParams(window.location.search);
  const teacherUserName = urlParams.get("name");
  const [checkedStudents, setCheckedStudents] = useState([]);
  const [isLoginChecked, setIsLoginChecked] = useState(false);

  async function checkLoginStatus() {
    try {
      const response = await axios.get(
        getIsLogin + `?teacherUserName=${teacherUserName}`
      );
      return response.data;
    } catch (error) {
      console.error("Error checking login status:", error);
      return false;
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
    axios.get(removeLogin + `?teacherUserName=${teacherUserName}`);
    window.location.href = loginPage;
  }

  const handleCheckboxChange = async studentId => {
    setCheckedStudents(prevCheckedStudents =>
      prevCheckedStudents.map(student =>
        student.studentId === studentId
          ? { ...student, checked: !student.checked }
          : student
      )
    );

    try {
      const checkedStudent = checkedStudents.find(
        student => student.studentId === studentId
      );

      // Send the updated checkbox state to the Spring Boot API
      const response = await axios.post(
        updateAttendance + `?name=${teacherUserName}`,
        {
          studentId,
          attendanceStatus: checkedStudent.checked ? "ATTEND" : "ABSENCE",
        }
      );

      // Handle the API response, if needed
      console.log("API response:", response.data);
    } catch (error) {
      console.error("Error sending data to API:", error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const isLoggedIn = await checkLoginStatus();
      setIsLoggedIn(isLoggedIn);
      setIsLoginChecked(true);
    }

    fetchData();
  }, [teacherUserName]);

  useEffect(() => {
    async function fetchData() {
      try {
        await axios.get(lastDateUpdate);
        const studentsData = await axios.post(
          getStudentsForEachTeacher + `?teacherUserName=${teacherUserName}`
        );
        const fetchedStudents = studentsData.data["students"];
        setStudents(fetchedStudents);

        // Initialize checkedStudents state with default values based on fetched students
        setCheckedStudents(
          fetchedStudents.map(student => ({
            studentId: student.studentId,
            checked: !isLoginChecked, // Set default attendance to "ATTEND" when login status is checked
          }))
        );
      } catch (error) {
        console.error("Error fetching students data:", error);
      }
    }

    if (isLoginChecked) {
      // Fetch student data only after login status is checked
      fetchData();
    }
  }, [teacherUserName, isLoginChecked]);

  if (!isLoginChecked) {
    // Show a loading message or spinner until the login status is checked
    return <div>Loading...</div>;
  }

  return isLoggedIn ? (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Check</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.studentId}</td>
              <td>{student.studentName}</td>
              <td>
                <input
                  type="checkbox"
                  // checked={checkedStudents[index].checked}
                  onChange={() => handleCheckboxChange(student.studentId)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleLogout}>Save</button>
    </div>
  ) : (
    <div>Please log in to view the students' data.</div>
  );
};

export default AttendancePage;
