import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function PriceObj(props) {
  return (
    <div className="d-flex flex-column align-items-center mb-5 p-2 priceObj shadow">
      <div>
        <img alt="price" src={props.img} height="50px" width="50px"></img>
        <p>{props.title}</p>
        <p>{props.description}</p>
        <div className="d-flex border-top p-1 justify-content-between">
          <div className="justify-content-start">
            <p>{props.linkPriceUnit}</p>
            <Link to={props.link}>{props.linkPrice}</Link>
          </div>

          <div className="d-flex justify-content-end align-items-center">
            <FaChevronRight size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceObj;
