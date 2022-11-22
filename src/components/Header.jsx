import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { TypeAnimation } from 'react-type-animation';

function Header() {
  return (
    <Container>
      <Row>
        <Col className="centerElements text-center" id="header">
          <h1 className="display-1 font-weight-bold header-text"> CLEAN LAUNDRY</h1>
          <TypeAnimation
            // Same String at the start will only be typed once, initially
            sequence={[
              "Any Day of The Week",
              1000,
              "Delivered to Your Door",
              1000,
              "Done with Expert Care",
              1000,
              "In Just a Few Clicks",
              5000,
            ]}
            speed={50} // Custom Speed from 1-99 - Default Speed: 40
            style={{ fontSize: "1.75em", backgroundColor: "yellow",  whiteSpace: 'nowrap',
            overflow: 'hidden'}}
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
