import React from "react";
import AppleStore from "../img/apple_store.png";
import PlayStore from "../img/play_store.png";
import ScreenShot from "../img/screenshot.png";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { FaChevronRight } from "react-icons/fa";


function Mobile() {
  return (
    <Container id="mobile">
      <h2 className="text-center pt-1 mt-5">Download our App</h2>
      <h6 className="text-center">
          Your Laundry and Dry cleaning solution just a click away
        </h6>
      <Row>
      <Col sm={4} className="d-flex flex-column justify-content-start">
          <p><FaChevronRight size={30} />Cashless Payments</p>

          <p><FaChevronRight size={30} />Contactless collection and delivery</p>

          <p><FaChevronRight size={30} />Real-time order updates</p>

          <p><FaChevronRight size={30} />Dedicated 24/7 support</p>
</Col>

        <Col sm={4} className="d-flex flex-column justify-content-center">
          <a href="https://apps.apple.com/us/app/laundry-pickup-day/id1660074461">
            <img src={AppleStore} alt="apple store" width="100%"  />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.derickh93.lpnycapp">
            <img src={PlayStore} alt="play store" width="100%" />
          </a>
        </Col>
        <Col sm={4} className="d-flex justify-content-end">
          <img src={ScreenShot} alt="app screenshot" width="35%" />
        </Col>
      </Row>
    </Container>
  );
}

export default Mobile;
