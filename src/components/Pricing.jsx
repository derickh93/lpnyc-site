import React from "react";
import PriceObj from "./PriceObj";
import dryCleaning from "../img/dry-cleaning.png";
import laundryMachine from "../img/washing-machine.png";
import washing from "../img/washing.png";

import { Row, Container, Col } from "react-bootstrap/";

function Pricing() {
  return (
    <Container id="pricing">
      <h3 className="text-center pt-1 mt-5">Pricing</h3>
      <h6 className="text-center">Simple Pricing</h6>
      <h6 className="text-center">No hidden fees.</h6>
      <div >
        {" "}
        <div className="d-flex flex-row justify-content-between">
          <div>
            {" "}
            <h6>Free 24h delivery</h6>
          </div>
          <div>
            {" "}
            <h6>$30 minimum order</h6>
          </div>
          <div>
            <h6>$2.95 service fee</h6>
          </div>
        </div>
      </div>

      <Row className="font-italic">
        <Col sm={4} xs={12}>
          <PriceObj
            img={laundryMachine}
            title={"Wash"}
            description={"For everyday wear, towels and bedsheets"}
            linkPriceUnit={"Price Per Weight"}
            linkPrice={"From $32.85 /15lbs"}
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
