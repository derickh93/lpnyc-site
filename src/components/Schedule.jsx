import React from "react";
import Button from "react-bootstrap/esm/Button";
import {Container,Row,Col} from "react-bootstrap/";

function Schedule() {
  return (
    <Container fluid className="pt-3">
      <Row>
      <Col className="text-center" id="schedule">
        <Button
          className="scheduleButton"
          style={{
            height: "60px",
            width: "250px",
            backgroundColor: "#1c2f74",
          }}
        >
          {" "}
          <a className="text-white" href="https://lpdayweb.netlify.app/" style={{fontSize: 30}}>
            Schedule Now
          </a>
        </Button>
      </Col>
      </Row>
    </Container>
  );
}

export default Schedule;
