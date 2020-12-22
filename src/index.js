import React from "react";
import ReactDOM from "react-dom";
import Map from "./Map";
import places from "./places.json";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Map
    center={{ lat: 22.0574, lng: 78.9382 }}
    zoom={5}
    places={places}
  />,
  rootElement
);
