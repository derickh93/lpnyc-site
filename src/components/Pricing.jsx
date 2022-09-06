import React from "react";
import PriceObj from "./PriceObj";
import laundry from "../img/laundry.png";
import basket from "../img/laundry_basket.png";
import iron from "../img/ironing.png";
// import dryCleaning from "../img/dryclean.png";
// import dryCleaning from "../img/dry-cleaning (1).png"
// import dryCleaning from "../img/dry-cleaning (2).png"
import dryCleaning from "../img/dry-cleaning.png";
import laundryMachine from "../img/washing-machine.png";
import washing from "../img/washing.png"

import { Row, Container, Col } from "react-bootstrap/";

function Pricing() {
  return (
    <Container id="pricing">
      <h3 className="text-center pt-1 mt-5">Pricing</h3>
      <Row className="font-italic">
        <Col sm={3}
          xs={12} >
          <PriceObj
            img={laundryMachine}
            title={"Wash"}
            description={"For everyday wear, towels and bedsheets"}
            linkPriceUnit={"Price Per Weight"}
            linkPrice={"From $32 /15lbs"}
            link={"/pricing"}
          />
        </Col>

        <Col           sm={3}
          xs={12}>
          <PriceObj
            img={iron}
            title={"Wash & Press"}
            description={"For dress shirts to be washed & ironed"}
            linkPriceUnit={"Price Per Item"}
            linkPrice={"From $3.50"}
            link={"/pricing"}
          />
        </Col>
        <Col           sm={3}
          xs={12}>
          <PriceObj
            img={dryCleaning}
            title={"Dry Cleaning"}
            description={"For delicate items and fabrics"}
            linkPriceUnit={"Price Per Item"}
            linkPrice={"From $3.50"}
            link={"/pricing"}
          />
        </Col>
        <Col           sm={3}
          xs={12}>
          <PriceObj
            img={washing}
            title={"Bulky Items"}
            description={"For larger items that require special care"}
            linkPriceUnit={"Price Per Item"}
            linkPrice={"From $15"}
            link={"/pricing"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Pricing;
