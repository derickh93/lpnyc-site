import React from "react";
import Accordion from "react-bootstrap/Accordion";

function PriceObj(props) {
  return (
    <div className="d-flex flex-column align-items-center mb-5 p-2 priceObj shadow-lg">
      <img alt="price" src={props.img} height="50px" width="50px"></img>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <Accordion className="rounded shadow-lg bg-white acc">
        <Accordion.Item eventKey={0}>
          <Accordion.Header>{"Pricing from $2.00/ lb"}</Accordion.Header>
          <Accordion.Body>{"List of Prices"}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default PriceObj;
