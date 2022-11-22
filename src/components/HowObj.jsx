import React from "react";
import Figure from "react-bootstrap/Figure";

function HowObj(props) {
  return (
    <div>
      {" "}
      <Figure className="d-flex justify-content-center flex-column text-center">
        <Figure.Image
          className="mx-auto rounded shadow-lg bg-white"
          width={200}
          height={200}
          alt={props.title}
          src={props.img}
        />
        <Figure.Caption >
          <span style={{fontWeight: 'bold',fontSize:16, whitespace:"nowrap"}}>{props.title}</span>
          <br />
          {props.des}
        </Figure.Caption>
      </Figure>
    </div>
  );
}

export default HowObj;
