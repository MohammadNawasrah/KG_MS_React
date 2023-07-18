// ... (previous imports)

import { adminPage, loginPage } from "../core/data/static/staticData";

function Navbar() {
  const loginSession = sessionStorage.getItem("loggedIn");

  if (loginSession !== "true") {
    window.location.href = loginPage;
  }

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
              href={adminPage}
            >
              <h5>welcome user</h5>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href={adminPage}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href={loginPage}>
              Teachers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href={loginPage}>
              Students
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href={loginPage}>
              Logout
            </a>
          </li>
        </ul>
      </div>
      {/* ... (rest of the component code) */}
    </nav>
  );
}

export default Navbar;
