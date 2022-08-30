import React, { useState } from "react";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ServiceArea() {
  const [zip, setZip] = useState(" ");
  const [lat, setLat] = useState(null);
const [lng, setLng] = useState(null);
const [status, setStatus] = useState(null);

  function onSubmit(e) {
    e.preventDefault();
    checkZip();
  }
  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  function getCurrentPos() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
    });
  }

  async function checkZip() {
    const result = await axios.get(
      //https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=
      `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.zip}&key=${process.env.GOOGLE_API_KEY}`
    );
    console.log(
      JSON.stringify(result.data.results[0].address_components) +
        " " +
        JSON.stringify(result.data.results[0].geometry)
    );
  }

  function handleChange(event) {
    this.setState({zip: event.target.value});
  }

  return (
    <Container>
      <Row>
        <Col id="how">
          <h3 className="text-center pt-1 mt-5">Service Area</h3>
          <div className="vstack gap-3 d-flex align-items-center">
            <Form>
              <Form.Group
                className="mb-3 rounded shadow-lg bg-white acc"
                controlId="formZip"
              >
                <Form.Control
                  type="text"
                  placeholder="Zip Code"
                 // value={zip}
                 onChange={handleChange}                 />
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
