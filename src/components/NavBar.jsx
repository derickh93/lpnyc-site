import "../App.css";
import React from "react";
import logo from "../img/logo.PNG";
import { Container, Col, Nav, Navbar } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';


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
            <Nav.Link>          <HashLink smooth to="/#how" style={{ color: 'black' }}>
              How It Works          </HashLink>
            </Nav.Link>

            <Nav.Link href="/#pricing/"><HashLink smooth to="/#pricing" style={{ color: 'black' }}>Pricing </HashLink>
            </Nav.Link>
            <Nav.Link href="/#schedule/"><HashLink smooth to="/#schedule" style={{ color: 'black' }}>Schedule </HashLink>
            </Nav.Link>
            <Nav.Link href="/#faq/"><HashLink smooth to="/#faq" style={{ color: 'black' }}>FAQ </HashLink>
            </Nav.Link>
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
