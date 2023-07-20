import axios from "axios";
import React, { useEffect, useState } from "react";
import { updateAttendance } from "../core/data/static/staticData";

const Failed = () => {
  const students = JSON.parse(sessionStorage.getItem("data"));
  const [checkedStudents, setCheckedStudents] = useState(
    students.map(student => ({ studentId: student.studentId, checked: false }))
  );

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
      const response = await axios.post(updateAttendance, {
        studentId,
        attendanceStatus: checkedStudent.checked ? "ATTEND" : "ABSENCE",
      });

      // Handle the API response, if needed
      console.log("API response:", response.data);
    } catch (error) {
      console.error("Error sending data to API:", error);
    }
  };
  useEffect(() => {
    const setAllStudentsAsAttend = async () => {
      try {
        // Loop through all students and send the "ATTEND" status to the API
        for (const student of students) {
          await axios.post(updateAttendance, {
            studentId: student.studentId,
            attendanceStatus: "ATTEND",
          });
        }

        // Update the local state to set all students as "ATTEND"
        setCheckedStudents(prevCheckedStudents =>
          prevCheckedStudents.map(student => ({
            studentId: student.studentId,
            checked: false,
          }))
        );
      } catch (error) {
        console.error("Error sending data to API:", error);
      }
    };

    setAllStudentsAsAttend();
  }, []);
  return (
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
          {checkedStudents.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{students[index].studentName}</td>
              <td>
                <input
                  type="checkbox"
                  checked={student.checked}
                  onChange={() => handleCheckboxChange(student.studentId)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Failed;
