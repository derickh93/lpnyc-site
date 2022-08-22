import React from "react";
import DennyW from "../img/DennyW.jpg";
import MichelleM from "../img/MichelleM.jpg";
import SandyD from "../img/SandyD.jpg";

function Clients() {
  return (
    <div>
      <div className="container p-3 mb-5" id="clients">
        <h1 className="text-center font-weight-bold">Happy Clients</h1>
        <div className="row row-content font-italic">
          <div className="col-sm-4 col-xs">
            <p>
              “My clothes come back clean, week in and week out. Wash & Go is
              awesome and reliable. We've recommended them to friends, and every
              time they are satisfied. We won't use anyone else!”
            </p>
            <img
              alt="Sandy D"
              className="rounded-circle shadow-lg bg-white"
              src={SandyD}
            />
            <span>Sandy D.</span>
          </div>

          <div className="col-sm-4 col-xs">
            <p>
              "My company has been very pleased with the service and recommend
              your company to anyone seeking professional dry-cleaning service.
              Thanks guys!"
            </p>
            <img
              alt="Denny W"
              className="rounded-circle shadow-lg bg-white"
              src={DennyW}
            />
            <span>Denny W.</span>
          </div>

          <div className="col-sm-4 col-xs">
            <p>
              “My husband and I are very satisfied customers. Our clothes smell
              fresh, and they are always willing to accommodate special
              requests. I am glad I have a laundry service that I can trust.”
            </p>
            <img
              alt="Michelle M"
              className="rounded-circle shadow-lg bg-white"
              src={MichelleM}
            />
            <span>Michelle M.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
