import "../App.css";
import React, { useState } from "react";
import { Container, Col, Nav, Navbar, Row } from "react-bootstrap";
import iron from "../img/ironing.png";
import dryCleaning from "../img/dry-cleaning.png";
import laundryMachine from "../img/washing-machine.png";
import washing from "../img/washing.png";
import Wash from "./Wash";
import WashPress from "./WashPress";
import DryClean from "./DryClean";
import Bulky from "./Bulky";

function PriceNavBar(props) {
  const [active, setActive] = useState("wash");
  return (
    <Container>
      <Navbar bg="white">
        <Nav className="d-flex flex-row">
          <Row>
            <Col xs={3}>
              <Nav.Link
                className={
                  active == "wash"
                    ? "border border-secondary shadow rounded-circle"
                    : "priceObj"
                }
                onClick={() => setActive("wash")} /* href="/pricing/wash" */
              >
                <img
                  alt="price"
                  src={laundryMachine}
                  height="50px"
                  width="50px"
                />
              </Nav.Link>
            </Col>
            <Col xs={3}>
              <Nav.Link
                className={
                  active == "press"
                    ? "border border-secondary shadow rounded-circle"
                    : "priceObj"
                }
                onClick={() => setActive("press")} /* href="/pricing/press" */
              >
                <img alt="price" src={iron} height="50px" width="50px" />
              </Nav.Link>
            </Col>
            <Col xs={3}>
              <Nav.Link
                className={
                  active == "dry"
                    ? "border border-secondary shadow rounded-circle"
                    : "priceObj"
                }
                onClick={() => setActive("dry")} /*  href="/pricing/dry/" */
              >
                <img alt="price" src={dryCleaning} height="50px" width="50px" />
              </Nav.Link>
            </Col>
            <Col xs={3}>
              <Nav.Link
                className={
                  active == "bulky"
                    ? "border border-secondary shadow rounded-circle"
                    : "priceObj"
                }
                onClick={() => setActive("bulky")} /* href="/pricing/bulky/" */
              >
                <img alt="price" src={washing} height="50px" width="50px" />
              </Nav.Link>
            </Col>
          </Row>
        </Nav>
      </Navbar>
      {active == "wash" && <Wash />}
      {active == "press" && <WashPress />}
      {active == "dry" && <DryClean />}
      {active == "bulky" && <Bulky />}
    </Container>
  );
}

export default PriceNavBar;
