import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar
          bg="dark"
          variant="dark"
          expand="lg"
          className="navbar-container"
        >
          <Navbar.Brand href="#" id="navbrand-container">
            My PortFolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/" className="navlink">
                HOME
              </Link>
              <Link to="/#about" className="navlink">
                ABOUT
              </Link>
              <Link to="/#contact" className="navlink">
                CONTACT
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
