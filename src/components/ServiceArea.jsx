import React, { useState,useRef } from "react";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import getDistance from 'geolib/es/getDistance';


function ServiceArea() {
  const zipRef = useRef();
  const lat = 40.720421;
  const long = -73.743233;
  const [status, setStatus] = useState(null);

  function onSubmit(e) {
    e.preventDefault();
    checkZip();
  }

  function getCurrentPos() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
    });
  }

  function getDistanceBetweenTwoPoints(cord1, cord2) {
    if (cord1.lat == cord2.lat && cord1.lon == cord2.lon) {
      return 0;
    }
  
    const radlat1 = (Math.PI * cord1.lat) / 180;
    const radlat2 = (Math.PI * cord2.lat) / 180;
  
    const theta = cord1.lon - cord2.lon;
    const radtheta = (Math.PI * theta) / 180;
  
    let dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  
    if (dist > 1) {
      dist = 1;
    }
  
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344; //convert miles to km
    
    return dist;
  }

  async function checkZip() {
    const result = await axios.get(
      //https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=
      `https://maps.googleapis.com/maps/api/geocode/json?address=${zipRef.current.value}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
    console.log(result)
        let custLat = JSON.stringify(result.data.results[0].geometry.bounds.northeast.lat);
        let custLng = JSON.stringify(result.data.results[0].geometry.bounds.northeast.lng);
        console.log(custLat)
        console.log(custLng)
        console.log(lat)
        console.log(long)


        console.log(getDistanceBetweenTwoPoints(
           custLat, custLng, lat,  long 
        ));
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
                <Form.Control
                  type="text"
                  placeholder="Zip Code"
                 ref={zipRef}
                         />
              </Form.Group>
              <Form.Text className="text-muted">
                Enter your zipcode to confirm that LPNYC services your area.
              </Form.Text>
              <Button variant="primary" type="submit">
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
