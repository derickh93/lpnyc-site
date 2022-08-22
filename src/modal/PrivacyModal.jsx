import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";

export default function PrivacyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Privacy Policy
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="container-fluid">
          <form>
            <div class="form-group row">
              <p>
                This Privacy Policy governs the manner in which Wash & Go, Inc.
                & washgolaundry.com collects, uses, maintains and discloses
                information collected from users (each, a “User”) of the
                washgolaundry.com website (“Site”). This privacy policy applies
                to the Site and all products and services offered by Wash & Go,
                Inc. & washgolaundry.com.
              </p>
              <h4>Personal Identification Information</h4>
              <p>
                We may collect personal identification information from Users in
                a variety of ways, including, but not limited to, when Users
                visit our site, register on the site, place an order, subscribe
                to the newsletter, respond to a survey, fill out a form, and in
                connection with other activities, services, features or
                resources we make available on our Site. Users may be asked for,
                as appropriate, name, email address, mailing address, phone
                number, credit card information. Users may, however, visit our
                Site anonymously. We will collect personal identification
                information from Users only if they voluntarily submit such
                information to us. Users can always refuse to supply personally
                identification information, except that it may prevent them from
                engaging in certain Site related activities. Non-personal
                identification information. We may collect non-personal
                identification information about Users whenever they interact
                with our Site. Non-personal identification information may
                include the browser name, the type of computer and technical
                information about Users means of connection to our Site, such as
                the operating system and the Internet service providers utilized
                and other similar information.
              </p>
              <h4>Web Browser Cookies</h4>
              <p>
                Our Site may use “cookies” to enhance User experience. User’s
                web browser places cookies on their hard drive for
                record-keeping purposes and sometimes to track information about
                them. User may choose to set their web browser to refuse
                cookies, or to alert you when cookies are being sent. If they do
                so, note that some parts of the Site may not function properly.
              </p>
              <h4>How We Use Collected Information</h4>
              Sudz N Bubblez, Inc. & SudzNBubblez.com may collect and use Users
              personal information for the following purposes: To improve
              customer service Information you provide helps us respond to your
              customer service requests and support needs more efficiently. To
              personalize user experience, we may use information in the
              aggregate to understand how our Users as a group use the services
              and resources provided on our Site. To improve our Site, we may
              use feedback you provide to improve our products and services. To
              process payments, we may use the information Users provide about
              themselves when placing an order only to provide service to that
              order. We do not share this information with outside parties
              except to the extent necessary to provide the service. To run a
              promotion, contest, survey or other Site feature To send Users
              information they agreed to receive about topics we think will be
              of interest to them. To send periodic emails We may use the email
              address to send User information and updates pertaining to their
              order. It may also be used to respond to their inquiries,
              questions, and/or other requests. If User decides to opt-in to our
              mailing list, they will receive emails that may include company
              news, updates, related product or service information, etc. If at
              any time the User would like to unsubscribe from receiving future
              emails, we include detailed unsubscribe instructions at the bottom
              of each email. How we protect your information We adopt
              appropriate data collection, storage and processing practices and
              security measures to protect against unauthorized access,
              alteration, disclosure or destruction of your personal
              information, username, password, transaction information and data
              stored on our Site. Sharing Your Personal Information We do not
              sell, trade, or rent Users personal identification information to
              others. We may share generic aggregated demographic information
              not linked to any personal identification information regarding
              visitors and users with our business partners, trusted affiliates
              and advertisers for the purposes outlined above. We may use third
              party service providers to help us operate our business and the
              Site or administer activities on our behalf, such as sending out
              newsletters or surveys. We may share your information with these
              third parties for those limited purposes provided that you have
              given us your permission. Third Party Websites Users may find
              advertising or other content on our Site that link to the sites
              and services of our partners, suppliers, advertisers, sponsors,
              licensors and other third parties. We do not control the content
              or links that appear on these sites and are not responsible for
              the practices employed by websites linked to or from our Site. In
              addition, these sites or services, including their content and
              links, may be constantly changing. These sites and services may
              have their own privacy policies and customer service policies.
              Browsing and interaction on any other website, including websites
              which have a link to our Site, is subject to that website’s own
              terms and policies. Changes To This Privacy Policy Sudz N Bubblez,
              Inc. & SudzNBubblez.com has the discretion to update this privacy
              policy at any time. When we do, we will revise the updated date at
              the bottom of this page. We encourage Users to frequently check
              this page for any changes to stay informed about how we are
              helping to protect the personal information we collect. You
              acknowledge and agree that it is your responsibility to review
              this privacy policy periodically and become aware of
              modifications. Your Acceptance Of These Terms By using this Site,
              you signify your acceptance of this policy. If you do not agree to
              this policy, please do not use our Site. Your continued use of the
              Site following the posting of changes to this policy will be
              deemed your acceptance of those changes.
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
