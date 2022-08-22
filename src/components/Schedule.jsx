import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

function Schedule() {
  return (
    <Container fluid>
      <div className="col-12 text-center" id="schedule">
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
      </div>
    </Container>
  );
}

export default Schedule;
