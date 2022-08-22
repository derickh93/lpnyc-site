import React from "react";
import { Name } from "../js/Vars";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import PrivacyModal from "../modal/PrivacyModal";
import TermsModal from "../modal/TermsModal";

function Footer() {
  const [modalPrivacyShow, setModalPrivacyShow] = React.useState(false);
  const [modalTermShow, setModalTermShow] = React.useState(false);

  return (
    <div className="site-footer">
      <div className="row">
        <div className="col-12 col-6 col-sm-3 text-center">
          <PrivacyModal
            show={modalPrivacyShow}
            onHide={() => setModalPrivacyShow(false)}
          />
          <TermsModal
            show={modalTermShow}
            onHide={() => setModalTermShow(false)}
          />
          <h5>Social</h5>
          <a
            className="btn btn-social-icon btn-instagram"
            href="http://instagram.com/"
          >
            <FaInstagram />
          </a>
          <a
            className="btn btn-social-icon btn-facebook"
            href="http://facebook.com/"
          >
            <FaFacebook />
          </a>
          <a
            className="btn btn-social-icon btn-twitter"
            href="http://twitter.com/"
          >
            <FaTwitter />
          </a>
          <a
            className="btn btn-social-icon btn-google"
            href="http://youtube.com/"
          >
            <FaYoutube />
          </a>
        </div>
        <div className="col col-12 col-sm-6 text-center">
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
        </div>
      </div>
    </div>
  );
}

export default Footer;
