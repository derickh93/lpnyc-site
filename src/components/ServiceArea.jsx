import React, { useRef, useState } from "react";
import axios from "axios";
import { Container, Col, Row,Alert} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const haversine = require("haversine");

function ServiceArea() {
  const zipRef = useRef();
  const lat = 40.720421;
  const long = -73.743233;
  const [distance, setDistance] = useState();
  const [error, setError] = useState(false);


  function onSubmit(e) {
    e.preventDefault();
    if(zipRef.current.value.length !== 5 || !isNumeric(zipRef.current.value)){
      setDistance(0)
      setError(true);
    }
    else {
      setError(false);
      checkZip();
    }
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
    if(result.data.status == "ZERO_RESULTS") {
      setDistance(0)
      setError(true);    }
    else {
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
  }

  function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }

  return (
    <Container>
      <Row>
        <Col id="how">
          <h3 className="text-center pt-1 mt-5">Service Area</h3>
          <div className="vstack gap-3 d-flex align-items-center">
            <Form onSubmit={onSubmit}>
              <Form.Group
                className="mb-3 rounded shadow bg-white acc"
                controlId="formZip"
              >
                <Form.Control type="text" placeholder="Zip Code" ref={zipRef} />
              </Form.Group>
              <Form.Group className="d-flex flex-column align-items-center">
                <Form.Text className="text-muted">
                  Enter your zipcode to confirm that LPNYC services your area.
                </Form.Text>
                <Button
                  variant="primary"
                  type="submit"
                  className="scheduleButton"
                  style={{
                    backgroundColor: "#1c2f74",
                  }}
                >
                  Submit
                </Button>
                <div className="pt-3">                {distance <= 10 && distance > 0 && (
                  <Alert variant="success">Congratulation we service your area</Alert>

                )}
                {distance > 10 && (
                 <Alert variant="danger">Unfortunately we are not in your area yet</Alert>
                )}
                {error && <Alert variant="danger">Please enter a valid 5 digit zipcode</Alert>}
                </div>

              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ServiceArea;
