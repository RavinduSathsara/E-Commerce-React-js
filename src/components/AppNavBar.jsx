import React from "react";

const AppNavBar = () => {
  return (
    <div className="font-weight-bold">
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top ">
        <div class="container">
          <a class="navbar-brand " href="#">
            E - Commerce
          </a>
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
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">
                  <a href="">
                    <i class="bi bi-cart  mx-2">
                      <span class="badge bg-dark mx-1 ">2</span>
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
