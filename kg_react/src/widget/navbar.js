import React from "react";
import { adminPanel, loginPage } from "../core/data/static/staticData";
import "../static/css/navbar.css";
function Navbar({ linkNames, linkUrls }) {
  function handleLogout() {
    sessionStorage.clear();
    window.location.href = loginPage;
  }
  return (
    <nav dir="rtl" class="navbar navbar-expand-lg navbar-light bg-ligth">
      <div class="navbar-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
          <a class="navbar-brand" htef={"#"}>
            القائمة
          </a>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
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
            <li className="nav-item">
              <a
                className="nav-link "
                aria-current="page"
                htef={loginPage}
                onClick={handleLogout}
              >
                تسجيل الخروج
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
