import React from "react";
import scarecrow from "../images/Scarecrow.png";
import "./image.css";

const Image = () => {
  return (
    <picture>
      <img src={scarecrow} alt="scarecrow" />
    </picture>
  );
};

export default Image;
