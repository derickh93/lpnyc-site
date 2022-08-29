import React from "react";
import PriceObj from "./PriceObj";
import laundry from "../img/laundry.png";
import basket from "../img/laundry_basket.png";
import dryClean from "../img/dryclean.png";
import Container from "react-bootstrap/esm/Container";

function Pricing() {
  return (
    <Container fluid id="pricing">
      <h3 className="text-center pt-1 mt-5">Pricing</h3>

      <div className="row font-italic">
        <div className="col-sm-3 col-xs">
          <PriceObj
            img={basket}
            title={"Wash"}
            description={"For everyday wear, towels and bedsheets"}
            shortDes={"test short des"}
          />
        </div>

        <div className="col-sm-3 col-xs">
          <PriceObj
            img={laundry}
            title={"Wash & Press"}
            description={"For dress shirts to be washed & ironed"}
            shortDes={"test short des"}
          />
        </div>
        <div className="col-sm-3 col-xs">
          <PriceObj
            img={dryClean}
            title={"Dry Cleaning"}
            description={"For delicate items and fabrics"}
            shortDes={"test short des"}
          />
        </div>
        <div className="col-sm-3 col-xs">
          <PriceObj
            img={laundry}
            title={"Bulky Items"}
            description={"For larger items that require special care"}
            shortDes={"test short des"}
          />
        </div>
      </div>
    </Container>
  );
}

export default Pricing;
