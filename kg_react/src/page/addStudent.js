import React, { useState } from 'react';
import axios from 'axios';
import withSessionTimeout from '../core/functions/withSessionTimeout';
import { addStudentApi, loginPage } from '../core/data/static/staticData';
import Navbar from '../widget/navbar';
import "../static/css/addStudent.css";
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
      <Navbar />
      <div id='container'>
        <center>
          <h2>Add New Student </h2>
          <form onSubmit={handleSubmit} className='add-std-form'>
            <div className='form-control' id='input-form'>
              <input type="text" value={studentName} required className='form-control' id='input-form' placeholder='Student name' onChange={(e) => setStudentName(e.target.value)} />
              <br />
              <input type="date" value={dateOfBirth} className='form-control' id='input-form' required onChange={(e) => setDateOfBirth(e.target.value)} />
              <br />
              <input type="tel" value={phoneNumber} placeholder='Phone Number' id='input-form' className='form-control' required onChange={(e) => setPhoneNumber(e.target.value)} />

              <button type="submit" className='btn btn-light' id='submit-btn'>Add Student</button>
            </div>
          </form>
        </center>
      </div>
    </div>
  );
};
export default withSessionTimeout(AddStudentPage);
