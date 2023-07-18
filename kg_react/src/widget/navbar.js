import React from "react";
import { adminPanel } from "../core/data/static/staticData";

function Navbar({ linkNames, linkUrls }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* ... (rest of the component code) */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item1">
            <a
              className="nav-link active"
              aria-current="page"
              id="hello-msg"
              href={adminPanel}
            >
              <h5>welcome user</h5>
            </a>
          </li>
          {linkNames.map((linkName, index) => (
            <li className="nav-item" key={index}>
              <a
                className="nav-link active"
                aria-current="page"
                href={linkUrls[index]}
              >
                {linkName}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* ... (rest of the component code) */}
    </nav>
  );
}

export default Navbar;
