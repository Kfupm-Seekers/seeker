
import './NavBar.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function NavBar() {
  
  var logged = false;

  useEffect(() => {
    if (localStorage.getItem("token")) {
       logged = true;
    }
});



  return (
 <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name id />
          <div className="hamburger-lines">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>
          <img src="images/seeker.jpeg" width={150} />
          <ul className="menu-items">
           
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses | Paths</a></li> 
            <li><a href="/profile">Profile</a></li>
            
            <li><a  href="/register">Register</a></li>

            <li><a  href="/logout">Logout</a></li>

          
            {/* <li><a href="#"></a></li> */}
          </ul>
          
        </div>
      </nav>

    
  )
}
