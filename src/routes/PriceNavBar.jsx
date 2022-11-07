import "../App.css";
import React, { useState } from "react";
import { Container, Col, Nav, Navbar, Row } from "react-bootstrap";
import dryCleaning from "../img/dry-cleaning.png";
import laundryMachine from "../img/washing-machine.png";
import washing from "../img/washing.png";
import Wash from "./Wash";
import DryClean from "./DryClean";
import Bulky from "./Bulky";
import Footer from "../components/Footer";

function PriceNavBar(props) {
  const [active, setActive] = useState(props.active);
  
  return (
    <Container>
      <Navbar bg="white">
        <Nav className="d-flex flex-row">
          <Row>
            <Col xs={4}>
              <Nav.Link
                className={
                  active === "wash"
                    ? "border border-secondary shadow rounded-circle"
                    : "priceObj"
                }
                onClick={() => {setActive("wash")
              
              }}
                
              >
                <img
                  alt="price"
                  src={laundryMachine}
                  height="50px"
                  width="50px"
                />
              </Nav.Link>
            </Col>

            <Col xs={4}>
              <Nav.Link
                className={
                  active === "dry-clean"
                    ? "border border-secondary shadow rounded-circle"
                    : "priceObj"
                }
                onClick={() => {setActive("dry-clean")
              }}
              >
                <img alt="price" src={dryCleaning} height="50px" width="50px" />
              </Nav.Link>
            </Col>
            <Col xs={4}>
              <Nav.Link
                className={
                  active === "bulky"
                    ? "border border-secondary shadow rounded-circle"
                    : "priceObj"
                }
                onClick={() => {setActive("bulky")
   }}
              >
                <img alt="price" src={washing} height="50px" width="50px" />
              </Nav.Link>
            </Col>
          </Row>
        </Nav>
      </Navbar>
      {active === "wash" && <Wash />}
      {active === "dry-clean" && <DryClean />}
      {active === "bulky" && <Bulky />}
      <Footer/>
    </Container>
  );
}

export default PriceNavBar;
