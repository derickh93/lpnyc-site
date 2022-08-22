import React from "react";
import logo from "../img/logo.PNG";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <div>
      <Navbar bg="white" expand="sm">
        <Container fluid>
          <Col className="d-flex justify-content-between">
            <img
              alt="Laundry Pickup NYC Logo"
              src={logo}
              height="35%"
              width="35%"
            />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Col>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-nowrap">
              <Nav.Link href="#how">How It Works</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#schedule">Schedule</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
              <Nav.Link href="javascript:void(Tawk_API.toggle())">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
