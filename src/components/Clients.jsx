import React from "react";
import DennyW from "../img/DennyW.jpg";
import MichelleM from "../img/MichelleM.jpg";
import SandyD from "../img/SandyD.jpg";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Clients() {
  return (
    <Container className="container" id="clients">
      <h1 className="text-center font-weight-bold pt-1 mt-5">Happy Clients</h1>
      <Row className="font-italic">
        <Col
          sm={4}
          xs={12}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <p>
            My clothes come back clean, week in and week out. Laundry Pickup is
            awesome and reliable. We've recommended them to friends, and every
            time they are satisfied. We won't use anyone else!
          </p>
          <img
            alt="Alyssa C."
            className="rounded-circle shadow-lg bg-white"
            width={165}
            height={170}
            src={SandyD}
          />
          <span>Alyssa C.</span>
        </Col>

        <Col
          sm={4}
          xs={12}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          {" "}
          <p>
            My company is very happy with the service and I recommend LPNYC to
            anyone seeking professional dry cleaning service.
          </p>
          <img
            alt="Mike J."
            className="rounded-circle shadow-lg bg-white m-2"
            src={DennyW}
            width={165}
            height={170}
          />
          <span>Mike J.</span>
        </Col>

        <Col
          sm={4}
          xs={12}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          {" "}
          <p>
            My husband and I are very satisfied customers. Our clothes smell
            fresh, and they are always willing to accommodate special requests.
            I am glad I have a laundry service that I can trust.
          </p>
          <img
            alt="Sandra W."
            className="rounded-circle shadow-lg bg-white"
            src={MichelleM}
            width={165}
            height={170}
          />
          <span>Sandra W.</span>
        </Col>
      </Row>
    </Container>
  );
}

export default Clients;
