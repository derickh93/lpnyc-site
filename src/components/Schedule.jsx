import React from "react";
import Button from "react-bootstrap/esm/Button";
import {Container,Row,Col} from "react-bootstrap/";

function Schedule() {
  return (
    <Container fluid>
      <Row>
      <Col className="text-center" id="schedule">
        <Button
          className="scheduleButton"
          style={{
            height: "60px",
            width: "250px",
            fontSize: "30px",
            backgroundColor: "#1c2f74",
          }}
        >
          {" "}
          <a className="text-white" href="http://lpnycweb.netlify.app">
            Schedule Now
          </a>
        </Button>
      </Col>
      </Row>
    </Container>
  );
}

export default Schedule;
