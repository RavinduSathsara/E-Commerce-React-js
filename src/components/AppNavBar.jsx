import React from "react";

const AppNavBar = () => {
  return (
    <div className="font-weight-bold">
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top ">
        <div className="container">
          <a className="navbar-brand " href="#">
            E - Commerce
          </a>
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
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">
                  <a href="">
                    <i className="bi bi-cart  mx-2">
                      <span className="badge bg-dark mx-1 ">3</span>
                    </i>
                  </a>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppNavBar;
