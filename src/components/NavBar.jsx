import React from "react";
import logo from "../img/logo.PNG";
import { Container, Col, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Container>
      <Navbar bg="white" expand="sm">
        <Col className="d-flex justify-content-between">
          <img
            alt="Laundry Pickup NYC Logo"
            src={logo}
            height="45%"
            width="45%"
          />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Col>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-nowrap">
            <Nav.Link href="#how">How It Works</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#schedule">Schedule</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link
              onClick={(event) => {
                event.preventDefault();
                window.Tawk_API.toggle();
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default NavBar;
