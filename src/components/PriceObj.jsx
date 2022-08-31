import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function PriceObj(props) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-1 priceObj shadow h-100">
         <Link to={props.link} style={{ color: 'black' }}>
      <div>
        <div className="d-flex flex-column align-items-center">
        <img alt="price" src={props.img} height="50px" width="50px"></img>
        <p>{props.title}</p>
        <p>{props.description}</p>
        </div>
        <div className="d-flex border-top p-1 justify-content-between">
          <div className="justify-content-start">
            <p>{props.linkPriceUnit}</p>
            <p>{props.linkPrice}</p>

          </div>

          <div className="d-flex justify-content-end align-items-center">
            <FaChevronRight size={30} />
          </div>
        </div>
      </div>
      </Link>

    </div>
  );
}

export default PriceObj;
