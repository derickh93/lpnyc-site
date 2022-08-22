import React, { useRef } from "react";
import axios from "axios";

function ServiceArea() {
  const zipRef = useRef();

  function checkGeo() {
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
  }

  function getLoc() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

  function getCurrentPos() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
    });
  }

  async function checkZip(e) {
    checkGeo();
    getLoc();
    getCurrentPos();
    if (e.key === "Enter") {
      const result = await axios.get(
        //https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=
        `https://maps.googleapis.com/maps/api/geocode/json?address=${zipRef.current.value}&key=AIzaSyD3yGLqukoZeisoeXn6w843r79zgEwfeHo`
      );
      console.log(
        JSON.stringify(result.data.results[0].address_components) +
          " " +
          JSON.stringify(result.data.results[0].geometry)
      );
    }
  }

  return (
    <div className="container p-3 mb-5">
      <div className="col-12" id="how">
        <h3 className="text-center pt-1">Service Area</h3>
        <div className="vstack gap-3 d-flex align-items-center">
          <div>Confirm that LPNYC services your area.</div>
          <input
            type="text"
            id="zip"
            name="zip"
            placeholder="Enter Zip Code"
            ref={zipRef}
            onKeyDown={(e) => checkZip(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceArea;
