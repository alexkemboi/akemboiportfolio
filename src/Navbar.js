import React from "react";
import './Navbar.css';
function Navbar() {
  return (
    <div className="Navbar">
         {/* Navbar componenet */}
         <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <a class="navbar-brand text-light" href="#">Alex Kemboi</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse flex-column flex-lg-row bg-dark" id="navbarNav">
            <ul class="navbar-nav justify-content-end ml-auto">
              <li class="nav-item">
                <a class="nav-link text-light" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#skills">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#portfolio">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#contact">Contact</a>
              </li>
              <li>
                <a class="nav-link text-light" href="#" onclick="downloadCV()">Resume</a>
              </li>
            </ul>
          </div>
        </nav>     
    </div>
  );
}

export default Navbar;
