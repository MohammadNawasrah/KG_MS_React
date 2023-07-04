import React, { useState } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const handleusernameChange = (event) => {
    setusername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/logins', { username, password });

      if (response.data === 'Login successful') {
        // useHistory.push("./success_login.js");
        window.location.href = './success_login.js'; // Replace with your actual success page URL
      } else {
        // useHistory.push("./failed_login.js");
        window.location.href = './failed_login.js'; // Replace with your actual failure page URL
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={handleusernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
