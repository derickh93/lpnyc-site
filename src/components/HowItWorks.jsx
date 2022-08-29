import React from "react";
import howOne from "../img/howOne.PNG";
import howTwo from "../img/howTwo.PNG";
import howThree from "../img/howThree.PNG";
import Container from "react-bootstrap/esm/Container";
import HowObj from "./HowObj";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function HowItWorks() {
  return (
    <Container id="how">
      <Row>
        <h3 className="text-center pt-1 mt-5">How It Works</h3>

        <Col>
          {" "}
          <HowObj
            img={howOne}
            title={"1. Schedule"}
            des={
              "Place your order with us at a day and time of your choice. Book online or with our mobile app."
            }
          />
        </Col>
        <Col>
          {" "}
          <HowObj
            img={howTwo}
            title={"2. Prepare"}
            des={
              "Pack your clothes into a laundry bag (or a sealed bag). Use one bag per service (laundry in one bag, dry cleaning in another). "
            }
          />
        </Col>
        <Col>
          {" "}
          <HowObj
            img={howThree}
            title={"3. Done"}
            des={
              "Our driver will collect your bags and take them to a partner laundry facility. We will clean your clothes with care and deliver them to you next-day. "
            }
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HowItWorks;
