import React from "react";

function PriceObj(props) {
  return (
    <div className="d-flex flex-column align-items-center m-5 priceObj shadow-lg">
      <img alt="price" src={props.img} height="50px" width="50px"></img>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.shortDes}</p>
    </div>
  );
}

export default PriceObj;
