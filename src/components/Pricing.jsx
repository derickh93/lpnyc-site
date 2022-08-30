import React from "react";
import PriceObj from "./PriceObj";
import laundry from "../img/laundry.png";
import basket from "../img/laundry_basket.png";
import dryClean from "../img/dryclean.png";
import { Row, Container, Col } from "react-bootstrap/";

function Pricing() {
  return (
    <Container id="pricing">
      <h3 className="text-center pt-1 mt-5">Pricing</h3>
      <Row className="font-italic">
        <Col sm={3}>
          <PriceObj
            img={basket}
            title={"Wash"}
            description={"For everyday wear, towels and bedsheets"}
            linkPriceUnit={"Price Per Weight"}
            linkPrice={"From $32 /15lbs"}
            link={"/Wash"}
          />
        </Col>

        <Col sm={3}>
          <PriceObj
            img={laundry}
            title={"Wash & Press"}
            description={"For dress shirts to be washed & ironed"}
            linkPriceUnit={"Price Per Item"}
            linkPrice={"From $3.50"}
            link={"/WashPress"}
          />
        </Col>
        <Col sm={3}>
          <PriceObj
            img={dryClean}
            title={"Dry Cleaning"}
            description={"For delicate items and fabrics"}
            linkPriceUnit={"Price Per Item"}
            linkPrice={"From $3.50"}
            link={"/DryClean"}
          />
        </Col>
        <Col sm={3}>
          <PriceObj
            img={laundry}
            title={"Bulky Items"}
            description={"For larger items that require special care"}
            linkPriceUnit={"Price Per Item"}
            linkPrice={"From $15"}
            link={"/Bulky"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Pricing;
