import React from 'react';
import { loginPage } from '../core/data/static/staticData';
import { adminPage } from '../core/data/static/staticData';
import "../static/css/navbar.css";


function Navbar() {
  const loginSession = sessionStorage.getItem('loggedIn');
  // const nameOfUser = sessionStorage.getItem('name');
  if (loginSession === "ture") {

  } else {
    window.location.href = loginPage;
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-ligth">
      <div class='navbar-fluid'>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          <a class="navbar-brand">menu</a>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item1">
              <a class="nav-link active" aria-current="page" id='hello-msg'><h5>wellcome user</h5></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href={adminPage}>Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href={"/#"}>Teachers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href={'/#'}>Students</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href={loginPage}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

};

export default Navbar;
