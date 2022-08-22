import React from "react";
import Figure from "react-bootstrap/Figure";

function HowObj(props) {
  return (
    <div>
      {" "}
      <Figure className="d-flex justify-content-center flex-column text-center">
        <Figure.Image
          className="mx-auto rounded shadow-lg bg-white"
          width={171}
          height={180}
          alt="171x180"
          src={props.img}
        />
        <Figure.Caption>
          <h6>{props.title}</h6>
          <br />
          {props.des}
        </Figure.Caption>
      </Figure>
    </div>
  );
}

export default HowObj;
