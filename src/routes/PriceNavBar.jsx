import "../App.css";
import React from "react";
import logo from "../img/logo.PNG";
import { Container, Col, Nav, Navbar,Row } from "react-bootstrap";
import iron from "../img/ironing.png";
import dryCleaning from "../img/dry-cleaning.png";
import laundryMachine from "../img/washing-machine.png";
import washing from "../img/washing.png"


function PriceNavBar() {
  return (
    <Container>
          <Navbar bg="white">
        
        <Nav className="d-flex flex-row">
        <Row>
    
          <Col xs={3}>

            <Nav.Link  href="/wash"><img alt="price" src={laundryMachine} height="50px" width="50px"/>
            </Nav.Link>
            </Col>
            <Col xs={3} >

            <Nav.Link href="/washpress/"><img alt="price" src={iron} height="50px" width="50px"/>
            </Nav.Link>
            </Col>
            <Col xs={3} >

            <Nav.Link href="/dryclean/"><img alt="price" src={dryCleaning} height="50px" width="50px"/>
            </Nav.Link>
            </Col>
            <Col xs={3} >

            <Nav.Link href="/bulky/"><img alt="price" src={washing} height="50px" width="50px"/>
            </Nav.Link>
            </Col>
            </Row>

          </Nav>
      </Navbar>
    </Container>
  );
}

export default PriceNavBar;
