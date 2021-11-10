import React from "react";

const AppNavBar = () => {
  return (
    <div className="font-weight-bold">
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top ">
        <div className="container">
          <a className="navbar-brand " href="#">
            E-Commerce
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
              <li className="nav-item m-1 ">
                <button class="btn btn-outline-dark" type="submit">
                  Home
                </button>
              </li>

              <li className="nav-item m-1">
                <button class="btn btn-outline-dark" type="submit">
                  Featuer
                </button>
              </li>
              <li className="nav-item m-1">
                <button class="btn btn-outline-dark" type="submit">
                  Pricing
                </button>
              </li>
              <li className="nav-item m-1 ">
                <button class="btn btn-outline-dark" type="submit">
                  <i class="bi-cart-fill me-1"></i>
                  Cart
                  <span class="badge bg-dark text-white ms-1 rounded-pill">
                    0
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppNavBar;
