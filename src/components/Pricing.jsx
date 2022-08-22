import React from "react";
import PriceObj from "./PriceObj";
import laundry from "../img/laundry.png";
import basket from "../img/laundry_basket.png";
import dryClean from "../img/dryclean.png";
import Container from "react-bootstrap/esm/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

function Pricing() {
  return (
    <Container fluid id="pricing">
      <h3 className="text-center pt-1 mt-5">Pricing</h3>

      <div className="row row-content font-italic">
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <div className="col-sm-3 col-xs">
            <PriceObj
              img={basket}
              title={"Wash"}
              description={"test des"}
              shortDes={"test short des"}
            />
          </div>
        </OverlayTrigger>

        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <div className="col-sm-3 col-xs">
            <PriceObj
              img={laundry}
              title={"Wash & Iron"}
              description={"test des"}
              shortDes={"test short des"}
            />
          </div>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <div className="col-sm-3 col-xs">
            <PriceObj
              img={dryClean}
              title={"Dry Cleaning"}
              description={"test des"}
              shortDes={"test short des"}
            />
          </div>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <div className="col-sm-3 col-xs">
            <PriceObj
              img={laundry}
              title={"Bulky Items"}
              description={"test des"}
              shortDes={"test short des"}
            />
          </div>
        </OverlayTrigger>
      </div>
    </Container>
  );
}

export default Pricing;
