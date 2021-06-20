import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default function Carouse() {
  return (
    <div>
      <AwesomeSlider
        media={[
          {
            source: "./images/f2.jpg",
          },
          {
            source: "/images/f3.jpg",
          },
          {
            source: "/images/fc.jpg",
          },
        ]}
      />
    </div>
  );
}
