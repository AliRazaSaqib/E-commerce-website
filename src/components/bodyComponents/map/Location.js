/** @format */

import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Location() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div
      style={{ height: "100vh", width: "100%" }}
      className="pt-12 container px-2 md:px-4 lg:px-8 2xl:px-12"
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      />
    </div>
  );
}
