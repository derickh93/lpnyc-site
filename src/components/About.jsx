import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function About() {
  return (
    <Container id="about">
      <h2 className="text-center pt-1 mt-5">About Us</h2>
      <Row className="d-flex flex-row justify-content-center">
        <Col sm={9}>
          <p className="text-center">
            We know that not everyone enjoys doing laundry but we’re pretty sure
            that everyone loves clean clothes. That's why we’ve made it our
            business to take care of your garment needs. We collect, clean and
            deliver your laundry in an efficient manner.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
