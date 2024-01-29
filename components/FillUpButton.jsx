import { FiArrowDown, FiArrowRight } from "react-icons/fi";

import React from "react";

const FillUpButton = ({
  text,
  className,
  onClick,
  style,
  textClass,
  noTint,
  downArrow,
  ...otherProps
}) => {
  return (
    <button
      style={style}
      {...otherProps}
      className={`p-2 px-2 fillup-btnStyle ${
        noTint ? "fillup-btnStyle-notint" : ""
      }  ${className} `}
      onClick={onClick}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div className={textClass}>{text}</div>
        {downArrow ? (
          <FiArrowDown size={"1.4em"} />
        ) : (
          <FiArrowRight size={"1.4em"} />
        )}
      </div>
    </button>
  );
};

export default FillUpButton;
