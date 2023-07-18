import React from "react";
import { adminPanel } from "../core/data/static/staticData";

function Navbar({ linkNames, linkUrls }) {
  return (
    <nav dir="rtl" className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item1">
            <a
              className="nav-link active"
              aria-current="page"
              id="hello-msg"
              href={adminPanel}
            >
              <h5>اهلا {sessionStorage.getItem("name")} </h5>
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
    </nav>
  );
}

export default Navbar;
