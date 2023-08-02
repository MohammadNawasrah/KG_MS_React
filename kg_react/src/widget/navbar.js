import React from "react";
import "../static/css/navbar.css";
import LinksReact from "../core/data/static/linksReact";
function Navbar({ linkNames, linkUrls }) {
  function handleLogout() {
    sessionStorage.clear();
    window.location.href = LinksReact.loginPage;
  }
  return (
    <nav dir="rtl" className="navbar navbar-expand-lg navbar-light bg-ligth">
      <div className="navbar-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          القائمة
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item1">
              <a
                className="nav-link active"
                aria-current="page"
                id="hello-msg"
                href={LinksReact.adminPanel}
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
                onClick={handleLogout}
                htef={LinksReact.loginPage}
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
