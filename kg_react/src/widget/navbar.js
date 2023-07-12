import React from 'react';
import "../static/css/navbar.css"


const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About me</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="openNav">
        <div className="icon"></div>
      </div>
    </div>
  );
};

export default Navbar;
