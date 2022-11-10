import React, { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle, faBars,faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import logo from "../image/logo12.png";
import "./Navbar.css";

const Navbar = ({ user, setLoginUser }) => {

const navRef=useRef();


const showNavBar=() =>{
    navRef.current.classList.toggle('responsive_Nav')
}





  return (
    <>
      {/* {console.log(user)} */}
      <nav className="navbar">
        <div className="leftNav">
          <img className="logo" src={logo} alt="logo not found" />
          <a href="/" className="reviser">
            <p> Reviser </p>{" "}
          </a>
        </div>

        <div className="dropdownButton">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Take a Quiz
            </button> 
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <Link class="dropdown-item " to="/quizAntonyms">
                  Antonyms
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/quizSynonyms">
                  Synonyms
                </Link>
              </li>
            </ul>
          </div>

          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Add a Word
            </button>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <Link class="dropdown-item " to="/AddAntonyms">
                  Antonyms
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/AddSynonyms">
                  Synonyms
                </Link>
              </li>
            </ul>
          </div>
        </div>

   <navbar className="nav_nav" ref={navRef}>

        
          <ul className="navbarList"  onClick={showNavBar} >
            <Link to="/">
              <li> Home </li>
            </Link>
            <a href="#Courses">
              <li> Courses </li>
            </a>
            <a href="#Contact">
              <li> Contact </li>
            </a>
          </ul>
        
        
          {!user._id ? (
            <div className="auth_button"  onClick={showNavBar} >
              <Link id="beforeLogin" to="/login">
                {" "}
                Log In{" "}
              </Link>

              <Link id="beforeLogin" to="/register">
                {" "}
                Register
              </Link>
            </div>
          ) : (
            <div className="username_logout">
              {" "}
              <p id="afterLogin"> Hello {user.username} </p>
              <button
                id="afterLogin"
                className="logoutButton"
                onClick={() => setLoginUser({})}
              >
                {" "}
                logout
              </button>
            </div>
          )}
       
       

        
        

        <button className="cancel_icon icons" onClick={showNavBar} >
          <FontAwesomeIcon className="mobile_icon" icon={faXmark}  >
            {" "}
          </FontAwesomeIcon>
        </button>
        
        </navbar>
        <button className="menu_icon icons " >
          <FontAwesomeIcon className="mobile_icon" icon={faBars} onClick={showNavBar}>
            {" "}
          </FontAwesomeIcon>
         </button>
      </nav>
    </>
  );
};

export default Navbar;
