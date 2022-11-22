import "../App.css";
import React from "react";
import logo from "../img/logo.PNG";
import { Container, Col, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  return (
    <Container >
      <Navbar  bg="white" expand="sm">
        <Col className="d-flex justify-content-between">
          <img
            alt="Laundry Pickup Day Logo"
            src={logo}
            height="200px"
            width="200px"
          />
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{alignSelf:'center'}}/>
        </Col>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-nowrap">
            <Nav.Link >
              {" "}
              <HashLink smooth to="/" style={{ color: "black" ,fontSize: 20}}>
                Home{" "}
              </HashLink>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <HashLink smooth to="/#how" style={{ color: "black"  ,fontSize: 20}}>
                How It Works{" "}
              </HashLink>
            </Nav.Link>

            <Nav.Link href="/#pricing/">
              <HashLink smooth to="/#pricing" style={{ color: "black"  ,fontSize: 20}}>
                Pricing{" "}
              </HashLink>
            </Nav.Link>
            <Nav.Link href="/#schedule/">
              <HashLink smooth to="/#schedule" style={{ color: "black"  ,fontSize: 20}}>
                Schedule{" "}
              </HashLink>
            </Nav.Link>
            <Nav.Link href="/#faq/">
              <HashLink smooth to="/#faq" style={{ color: "black"  ,fontSize: 20}}>
                FAQ{" "}
              </HashLink>
            </Nav.Link>
            <Nav.Link
            style={{ color: "black"  ,fontSize: 20}}
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
