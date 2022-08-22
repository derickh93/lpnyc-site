import React from "react";
import AccordionObj from "./AccordionObj";
import faq from "../faq.json";
import faq2 from "../faq2.json";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function FAQ() {
  return (
    <Container id="faq">
      <h3 className="text-center">FAQ</h3>
      <Row className="d-flex flex-row justify-content-center">
        <Col>
          {" "}
          <AccordionObj faq={faq} />
        </Col>
        <Col>
          {" "}
          <AccordionObj faq={faq2} />
        </Col>
      </Row>
    </Container>
  );
}

export default FAQ;
