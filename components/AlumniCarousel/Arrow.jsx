import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Arrow = ({ direction, clickFunction, glyph }) => (
  <button
    className="ac-arrow d-flex justify-content-center align-items-center d-none d-md-block"
    onClick={clickFunction}
  >
    {direction === "left" ? (
      <FaChevronLeft color={"white"} size={40} />
    ) : (
      <FaChevronRight color={"white"} size={40} />
    )}
  </button>
);

export default Arrow;
