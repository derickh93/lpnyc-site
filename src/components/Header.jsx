import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Header() {
  return (
    <Container className="p-3 mb-5">
      <Row>
        <Col className="centerElements text-center" id="header">
          <h1 className="display-1 font-weight-bold"> CLEAN LAUNDRY</h1>

          <h1 className="display-6 font-weight-bold">IN JUST A FEW CLICKS</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
