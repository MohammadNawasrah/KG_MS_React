// ... (previous imports)

import { adminPanel, loginPage } from "../core/data/static/staticData";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-ligth">
      <div class='navbar-fluid'>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          menu
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item1"><h4>wellcome user</h4>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href={adminPanel}>Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href={'/#'}>Teachers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href={'/#'}>Students

              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href={loginPage}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
