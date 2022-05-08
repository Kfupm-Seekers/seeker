import React from 'react'
// import { Router } from 'react-router-dom';
// import { BrowserRouter,Switch,Route,NavLink} from "react-router-dom"
// import ReactDOM from 'react-dom';
// import Navbar3 from './Navbar3';
import './NavBar.css';
import { Auth0Context, useAuth0 } from "@auth0/auth0-react";

// import './App33.css';


export default function NavBar() {
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  const logoutWithRedirect = () =>
  logout({
    returnTo: window.location.origin,
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
          <ul className="menu-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Paths</a></li>
            <li><a href="#">Courses</a></li>
           
           { !isAuthenticated && (
            <li><a onClick={() => loginWithRedirect()} href="#">Login</a></li>
           )
           }
           { isAuthenticated && (
             <div>
                           
            <li><a onClick={() => logoutWithRedirect()} href="#">LogOut</a></li>
            <li><a href="#">Profile</a></li>

      
            </div>
           )  
          }
            {/* <li><a href="#"></a></li> */}
          </ul>
          <h1 className="logo">Navbar</h1>
        </div>
      </nav>

    
  )
}
