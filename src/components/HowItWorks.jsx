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
        <h2 className="text-center pt-1 mt-5">How It Works</h2>

        <Col sm={4}>
          {" "}
          <HowObj
            img={howOne}
            title={"1. Schedule"}
            des={
              "Place your order with us at a day and time of your choice. Book online or with our mobile app."
            }
          />
        </Col>
        <Col sm={4}>
          {" "}
          <HowObj
            img={howTwo}
            title={"2. Prepare"}
            des={
              "Pack your clothes into a laundry/sealed bag. Use one bag per service (laundry in one bag, dry cleaning in another)."
            }
          />
        </Col>
        <Col sm={4}>
          {" "}
          <HowObj
            img={howThree}
            title={"3. Done"}
            des={
              "Our driver will collect your bags and we will clean and deliver your clothes back to you the next day."
            }
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HowItWorks;
