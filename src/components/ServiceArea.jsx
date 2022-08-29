import React, { useState } from "react";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ServiceArea() {
  const [zip, setZip] = useState();

  function onSubmit() {
    console.log(zip);
    checkZip();
  }

  function checkGeo() {
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
  }

  function getLoc() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

  function getCurrentPos() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
    });
  }

  async function checkZip() {
    checkGeo();
    getLoc();
    getCurrentPos();
    const result = await axios.get(
      //https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=
      `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${process.env.GOOGLE_API_KEY}`
    );
    console.log(
      JSON.stringify(result.data.results[0].address_components) +
        " " +
        JSON.stringify(result.data.results[0].geometry)
    );
  }

  return (
    <Container>
      <Row>
        <Col id="how">
          <h3 className="text-center pt-1 mt-5">Service Area</h3>
          <div className="vstack gap-3 d-flex align-items-center">
            {/* <input
              type="text"
              className="rounded shadow-lg bg-white acc"
              id="zip"
              name="zip"
              placeholder="Enter Zip Code"
              ref={zipRef}
              onKeyDown={(e) => checkZip(e)}
            /> */}
            <Form>
              <Form.Group
                className="mb-3 rounded shadow-lg bg-white acc"
                controlId="formZip"
              >
                <Form.Control
                  type="text"
                  placeholder="Zip Code"
                  // value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </Form.Group>
              <Form.Text className="text-muted">
                Enter your zipcode to confirm that LPNYC services your area.
              </Form.Text>
              <Button variant="primary" type="submit" onClick={onSubmit}>
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ServiceArea;
