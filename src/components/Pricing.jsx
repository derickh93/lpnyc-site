import React from "react";
import PriceObj from "./PriceObj";
import dryCleaning from "../img/dry-cleaning.png";
import laundryMachine from "../img/washing-machine.png";
import washing from "../img/washing.png";

import { Row, Container, Col } from "react-bootstrap/";

function Pricing() {
  return (
    <Container id="pricing">
      <h2 className="text-center pt-1 mt-5">Pricing</h2>
      <div className="d-flex flex-column align-items-center">
      <span>Simple Pricing</span>
      <span>No hidden fees.</span>
      </div>

      <hr/>

      <div className="d-flex justify-content-between text-center">
            <span class>Free delivery</span>
            <div class="vr"></div>

            <span>$30 minimum order</span>
<div class="vr"></div>

            <span>$2.95 service fee</span>
        </div>
        <hr/>

      <Row className="font-italic">
        <Col sm={4} xs={12}>
          <PriceObj
            img={laundryMachine}
            title={"Wash"}
            description={"For everyday wear, towels and bedsheets"}
            linkPriceUnit={"Free Pickup & Delivery"}
            linkPrice={"with $30 minimum"}
            link={"wash"}
          />
        </Col>
        <Col sm={4} xs={12}>
          <PriceObj
            img={dryCleaning}
            title={"Dry Cleaning"}
            description={"For delicate items and fabrics"}
            linkPriceUnit={"Price Per Item"}
            linkPrice={"From $3.49"}
            link={"dry-clean"}

          />
        </Col>
        <Col sm={4} xs={12}>
          <PriceObj
            img={washing}
            title={"Bulky Items"}
            description={"For larger items that require special care"}
            linkPriceUnit={"Price Per Item"}
            linkPrice={"From $22"}
            link={"bulky"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Pricing;
