import React, { useState } from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import { useRouter } from "next/router";

const ContactUsMap = (props) => {
  const router = useRouter();
  return (
    <div
      className="contact-map-container"
      onClick={props.toggleBlockScroll}
      onPointerEnter={props.toggleBlockScroll}
      onPointerLeave={props.toggleAllowScroll}
      onFocus={props.toggleBlockScroll}
      onBlur={props.toggleAllowScroll}
    >
      <Map
        className="contact-map-container"
        google={props.google}
        initialCenter={{
          lat: 19.133727171343335,
          lng: 72.83533911126864,
        }}
        zoom={15}
      >
        <Marker
          title={"The Audio Guys (TAG) Institute"}
          name={"TAG"}
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/The+Audio+Guys+(TAG)+Institute/@19.1334028,72.8349931,20z/data=!4m5!3m4!1s0x3be7b7ea99744c0b:0xef9576547ed16d45!8m2!3d19.1334231!4d72.8353713",
              "_ blank"
            )
          }
          position={{ lat: 19.133727171343335, lng: 72.83533911126864 }}
        />
      </Map>
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey:"AIzaSyDq3qzWOBPPMtUEsTqanIaakfU-uM0CRvs",
})(ContactUsMap);
