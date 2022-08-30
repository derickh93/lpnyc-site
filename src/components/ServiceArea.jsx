import React, { useRef, useState } from "react";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const haversine = require("haversine");

function ServiceArea() {
  const zipRef = useRef();
  const lat = 40.720421;
  const long = -73.743233;
  const [distance, setDistance] = useState();

  function onSubmit(e) {
    e.preventDefault();
    checkZip();
  }

  function encode(array, ...splat) {
    let str = "";
    for (let i = 0; i < array.length; i++) {
      str += array[i];
      if (i < splat.length) {
        str += encodeURIComponent(splat[i]);
      }
    }
    return str;
  }

  async function checkZip() {
    const result = await axios.get(
      encode`https://maps.googleapis.com/maps/api/geocode/json?address=${zipRef.current.value}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
    let custLat = JSON.stringify(
      result.data.results[0].geometry.bounds.northeast.lat
    );
    let custLng = JSON.stringify(
      result.data.results[0].geometry.bounds.northeast.lng
    );
    const start = {
      latitude: custLat,
      longitude: custLng,
    };

    const end = {
      latitude: lat,
      longitude: long,
    };

    setDistance(haversine(start, end));
  }

  return (
    <Container>
      <Row>
        <Col id="how">
          <h3 className="text-center pt-1 mt-5">Service Area</h3>
          <div className="vstack gap-3 d-flex align-items-center">
            <Form onSubmit={onSubmit}>
              <Form.Group
                className="mb-3 rounded shadow-lg bg-white acc"
                controlId="formZip"
              >
                <Form.Control type="text" placeholder="Zip Code" ref={zipRef} />
              </Form.Group>
              <Form.Text className="text-muted">
                Enter your zipcode to confirm that LPNYC services your area.
              </Form.Text>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              {distance <= 10 && <h1>Congratulation we service your area</h1>}
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ServiceArea;
