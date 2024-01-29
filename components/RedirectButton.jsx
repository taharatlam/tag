import React from "react";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";

const RedirectButton = ({
  text,
  className,
  style,
  textClass,
  noTint,
  downArrow,
  url,
  ...otherProps
}) => {
  return (
    <button
      style={style}
      onClick={() => {
        window.open(url, "_blank");
      }}
      className={`p-2 px-2 fillup-btnStyle ${
        noTint ? "fillup-btnStyle-notint" : ""
      }  ${className} `}
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

export default RedirectButton;
