import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg ">
        <div className="container">
        <a className="navbar-brand text-light" href="#">React_Portfolio</a>
        
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav justify-content-end m-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Skill
                </a>
           
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blogs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Articles
                </a>
              </li>
              <button type="button" class="btn btn-light">
                Contact me
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
