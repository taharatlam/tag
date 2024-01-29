import React, { useReducer, useState } from "react";
import Arrow from "./Arrow";
import FadedElement from "./FadedElements";
import FocusElement from "./FocusedElements";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GOTO_START_INDEX":
      return Object.assign({}, state, { index: 0 });
    case "GOTO_END_INDEX":
      return Object.assign({}, state, {
        index: action.payload,
      });
    case "INCREMENT_INDEX":
      return Object.assign({}, state, {
        index: state.index + 1,
      });
    case "DECREMENT_INDEX":
      return Object.assign({}, state, {
        index: state.index - 1,
      });
    default:
      return state;
  }
};

function AlumniCarousel({ data, type }) {
  const [{ index }, dispatch] = useReducer(reducer, {
    index: 0,
  });

  // const returnPrevIndex = (index) => {
  //   if (index === 0) {
  //     return data.length - 2;
  //   }
  //   if (index === 1) {
  //     return data.length - 1;
  //   }
  //   return index - 2;
  // };
  // const returnNextIndex = (index) => {
  //   if (index === data.length - 2) {
  //     return 0;
  //   }
  //   if (index === data.length - 1) {
  //     return 1;
  //   }
  //   return index + 2;
  // };

  const [focusShift, setFocusShift] = useState(0);

  return (
    <div className="alumni-carousel-container">
      <div className="position-relative d-flex flex-row align-items-center justify-content-center">
        <Arrow
          direction="left"
          clickFunction={() => {
            index === 0
              ? dispatch({ type: "GOTO_END_INDEX", payload: data.length - 1 })
              : dispatch({ type: "DECREMENT_INDEX" });
            setFocusShift(-50);
          }}
        />
        <div className="d-flex flex-row align-items-center justify-content-center mx-3">
          <FadedElement
            type={type}
            index={index}
            style={{
              marginRight: -20,
              height: type ? "500px" : "225px",
              width: type ? "300px" : "330px",
              overflow: "hidden",
            }}
            testimonial={index === 0 ? data[data.length - 1] : data[index - 1]}
            onClick={() =>
              index === 0
                ? dispatch({ type: "GOTO_END_INDEX", payload: data.length - 1 })
                : dispatch({ type: "DECREMENT_INDEX" })
            }
          />
          <FocusElement
            type={type}
            focusShift={focusShift}
            testimonial={data[index]}
            index={index}
          />
          <FadedElement
            type={type}
            index={index}
            style={{
              marginLeft: -20,
              height: type ? "500px" : "225px",
              width: type ? "300px" : "330px",
              overflow: "hidden",
            }}
            onClick={() =>
              index === data.length - 1
                ? dispatch({ type: "GOTO_START_INDEX" })
                : dispatch({ type: "INCREMENT_INDEX" })
            }
            testimonial={index === data.length - 1 ? data[0] : data[index + 1]}
          />
        </div>
        <Arrow
          direction="right"
          clickFunction={() => {
            index === data.length - 1
              ? dispatch({ type: "GOTO_START_INDEX" })
              : dispatch({ type: "INCREMENT_INDEX" });
            setFocusShift(50);
          }}
        />
      </div>
      <div className="py-3">
        <h4 className="text-center fw-bold text-white">{data[index]?.name}</h4>
        {/*<div className="d-flex align-items-center justify-content-center">*/}
        {/*  <p*/}
        {/*    className="text-center text-danger fw-bold"*/}
        {/*    style={{ maxWidth: 350 }}*/}
        {/*  >*/}
        {/*    {data[index]?.message}*/}
        {/*  </p>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}

export default AlumniCarousel;
