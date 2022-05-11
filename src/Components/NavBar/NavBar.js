
import './NavBar.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Container } from 'react-bootstrap';

export default function NavBar() {
  
  var logged = false;

  useEffect(() => {
    if (localStorage.getItem("token")) {
       logged = true;
    }
});



  return (

    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">          <img src="images/seeker.jpeg" width={150} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/courses">Courses | Paths</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
       
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>


//  <nav className="navbar">
//         <div className="navbar-container collapse navbar-collapse container">

//           <img src="images/seeker.jpeg" width={150} />
//           <ul className="menu-items">
           
//             <li><a href="/">Home</a></li>
//             <li><a href="/courses">Courses | Paths</a></li> 
//             <li><a href="/profile">Profile</a></li>
            
//             <li><a  href="/register">Register</a></li>

//             <li><a  href="/logout">Logout</a></li>

          
//             {/* <li><a href="#"></a></li> */}
//           </ul>
//         </div>
//       </nav>

// // <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

// <a class="navbar-brand" href="#">Live-Post</a>

// <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">

// <span class="navbar-toggler-icon"></span>

// </button>



// <div class="collapse navbar-collapse" id="navbarColor01">

// <ul class="navbar-nav mr-auto" style="width: 100%; display: flex; justify-content: end;">



// <li  className="nav-item"><a href="/">Home</a></li>
//             <li  className="nav-item"><a class="nav-link" href="/courses">Courses | Paths</a></li> 
//             <li  className="nav-item"><a class="nav-link" href="/profile">Profile</a></li>
            
//             <li  className="nav-item"><a class="nav-link" href="/register">Register</a></li>

//             <li  className="nav-item"><a class="nav-link" href="/logout">Logout</a></li>


// </ul>



// </div>

// </nav>

    
  )
}
