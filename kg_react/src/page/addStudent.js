import React, { useState } from 'react';
import axios from 'axios';
import withSessionTimeout from '../core/functions/withSessionTimeout';
import { addStudentApi, loginPage } from '../core/data/static/staticData';
  function AddStudentPage() {
    const msg = sessionStorage.getItem('loggedIn');
    if (msg !== "ture") {
        window.location.href = loginPage; 
      }
    const [studentName, setStudentName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [teacherId, setTeacherId] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const payload = {
        studentName: studentName,
        dateOfBarthday: dateOfBirth,
        phoneNumber: phoneNumber,
        teacherId: teacherId,
      };
  
      try {
        const response = await axios.post(addStudentApi, payload);
        console.log("Data posted successfully:", response.data);
        // Clear form fields after successful submission
        setStudentName('');
        setDateOfBirth('');
        setPhoneNumber('');
        setTeacherId('');
      } catch (error) {
        console.error("Error posting data:", error);
      }
    };
  
    return (
      <div>
        <h2>Add Student</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Student Name:
            <input type="text" value={studentName} required onChange={(e) => setStudentName(e.target.value)} />
          </label>
          <br />
          <label>
            Date of Birth:
            <input type="date" value={dateOfBirth}required  onChange={(e) => setDateOfBirth(e.target.value)} />
          </label>
          <br />
          <label>
            Phone Number:
            <input type="text" value={phoneNumber} required onChange={(e) => setPhoneNumber(e.target.value)} />
          </label>
          <br />
          <button type="submit">Add Student</button>
        </form>
      </div>
    );
  };
export default  withSessionTimeout(AddStudentPage);
