import React from "react";
import { Link } from "react-router-dom";
//import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      User
    </Link>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/student"
            className={
              window.location.pathname === "/clinicals"
       
                ? "nav-link active"
                : "nav-link"
            }
      
          >
            Student
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/preceptor"
            className={
              window.location.pathname === "/preceptor"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Preceptor
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/faculty"
            className={
              window.location.pathname === "/faculty"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Faculty
          </Link>

        </li>

 <li className="nav-item">
          <Link
            to="/clinicals"
            className={
              window.location.pathname === "/clinicals"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Clinicals
          </Link>

        </li>


       <li className="nav-item">
          <Link
            to="/evaluate"
            className={
              window.location.pathname === "/evaluate"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Evaluate
          </Link>

        </li>



      </ul>
    </div>
  </nav>
);

export default Navbar;
