import React from "react";
import { Name } from "../js/Vars";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import PrivacyModal from "../modal/PrivacyModal";
import TermsModal from "../modal/TermsModal";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Footer() {
  const [modalPrivacyShow, setModalPrivacyShow] = React.useState(false);
  const [modalTermShow, setModalTermShow] = React.useState(false);

  return (
    <Container className="site-footer">
      <hr />
      <Row>
        <Col sm={3} className="text-center">
          <PrivacyModal
            show={modalPrivacyShow}
            onHide={() => setModalPrivacyShow(false)}
          />
          <TermsModal
            show={modalTermShow}
            onHide={() => setModalTermShow(false)}
          />
          {/* {laundrypickupnyc@gmail.com} */}
          <h5>Social</h5>
          <a
            className="btn btn-social-icon btn-facebook"
            href="https://www.facebook.com/waglaundry"
          >
            <FaFacebook />
          </a>
          <a
            className="btn btn-social-icon btn-twitter"
            href="https://twitter.com/washgolaundry"
          >
            <FaTwitter />
          </a>
        </Col>
        <Col sm={6} className="text-center">
          <a
            className="text-dark"
            id="privacyButton"
            href="#privacy"
            onClick={() => setModalPrivacyShow(true)}
          >
            <u>PRIVACY POLICY</u>
          </a>
          |
          <a
            className="text-dark"
            id="termsButton"
            href="#terms"
            onClick={() => setModalTermShow(true)}
          >
            <u>TERMS OF SERVICE</u>
          </a>
          <p className="text-dark">
            Copyright © 2022 | {Name}
            <br />
            Website by
            <br />
            <a className="text-dark" href="https://derickh.dev">
              <u>Queens Software Solutions</u>
            </a>
            <br />
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
