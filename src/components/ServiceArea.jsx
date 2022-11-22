import React, { useRef, useState } from "react";
import { Container, Col, Row, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ServiceArea() {
  const zipRef = useRef();
  const [error, setError] = useState(false);
  const [serviceArea, setServiceArea] = useState(false);

  const ZIP_CODES = [
    "11236",
    "11208",
    "11226",
    "11220",
    "11234",
    "11207",
    "11214",
    "11219",
    "11221",
    "11235",
    "11223",
    "11206",
    "11229",
    "11204",
    "11230",
    "11233",
    "11218",
    "11203",
    "11212",
    "11215",
    "11213",
    "11210",
    "11209",
    "11211",
    "11201",
    "11238",
    "11216",
    "11225",
    "11237",
    "11228",
    "11205",
    "11224",
    "11217",
    "11222",
    "11231",
    "11249",
    "11232",
    "11239",
    "11242",
    "11256",
    "11252",
    "11243",
    "11240",
    "11241",
    "11244",
    "11245",
    "11247",
    "11248",
    "11251",
    "11254",
    "11255",
    "11202",
    "11368",
    "11385",
    "11373",
    "11377",
    "11355",
    "11375",
    "11691",
    "11372",
    "11434",
    "11432",
    "11435",
    "11354",
    "11420",
    "11419",
    "11413",
    "11374",
    "11365",
    "11367",
    "11421",
    "11357",
    "11101",
    "11418",
    "11412",
    "11106",
    "11378",
    "11358",
    "11379",
    "11105",
    "11433",
    "11364",
    "11103",
    "11369",
    "11102",
    "11422",
    "11417",
    "11001",
    "11423",
    "11361",
    "11416",
    "11414",
    "11429",
    "11104",
    "11370",
    "11356",
    "11427",
    "11692",
    "11426",
    "11694",
    "11411",
    "11428",
    "11436",
    "11360",
    "11362",
    "11415",
    "11366",
    "11004",
    "11693",
    "11096",
    "11363",
    "11697",
    "11439",
    "11005",
    "11109",
    "11424",
    "11430",
    "11425",
    "11359",
    "11351",
    "11352",
    "11371",
    "11380",
    "11381",
    "11386",
    "11390",
    "11405",
    "11431",
    "11451",
    "11499",
    "11690",
    "11695",
    "11120",
    "11437",
  ];
  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setServiceArea(false);
    const included = ZIP_CODES.includes(zipRef.current.value);
    included
      ? setServiceArea(true)
      : setError("Unfortunately we are not in your area yet");
  }

  return (
    <Container>
      <Row>
        <Col id="how">
          <h2 className="text-center pt-1 mt-5">Service Area</h2>
          <div className="vstack gap-3 d-flex align-items-center">
            <Form onSubmit={onSubmit}>
              <Form.Group
                className="mb-3 rounded shadow bg-white acc"
                controlId="formZip"
              >
                <Form.Control
                  type="number"
                  placeholder="Zip Code"
                  ref={zipRef}
                  maxLength={5}
                />
              </Form.Group>
              <Form.Group className="d-flex flex-column align-items-center">
                <Form.Text className="text-muted">
                  Enter your zipcode to confirm that LPD services your area.
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
                <div className="pt-3">
                  {" "}
                  {serviceArea && (
                    <Alert variant="success">
                      Congratulations we service your area
                    </Alert>
                  )}
                  {error && <Alert variant="danger">{error}</Alert>}
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
