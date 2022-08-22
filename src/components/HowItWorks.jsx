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
            des={"Click schedule to place your pickup. You can customize"}
          />
        </Col>
        <Col>
          {" "}
          <HowObj
            img={howTwo}
            title={"2. Prepare"}
            des={
              "Set your laundry outside for pick up. (Machine-dry in one bag, hang-dry in another.)"
            }
          />
        </Col>
        <Col>
          {" "}
          <HowObj
            img={howThree}
            title={"3. Done"}
            des={
              "Your laundry will be picked up, washed, dried, folded, and returned to you the next day."
            }
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HowItWorks;
