import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import GoogleReview from "./GoogleReview";
import { ReviewsData } from "../ReviewsData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const items = ReviewsData.map((item, idx) => (
  <div key={idx} style={{ height: "100%" }} className="border m-1 rounded ">
    <GoogleReview data={item} />
  </div>
));

const responsive = {
  0: {
    items: 1,
  },
  750: {
    items: 2,
  },
  1024: {
    items: 3,
  },
  1400: {
    items: 4,
  },
};
const GoogleReviewsSection = () => {
  return (
    <div className="my-3 w-100 p-3 rounded">
      <AliceCarousel
        disableDotsControls
        // disableButtonsControls
        mouseTracking
        items={items}
        infinite={true}
        responsive={responsive}
        keyboardNavigation={true}
        renderPrevButton={() => {
          return (
            <div
              style={{
                userSelect: "none",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                height: "40px",
                width: "40px",
                color: "#fff",
                borderRadius: "50px",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <IoIosArrowBack size={40} />
            </div>
          );
        }}
        renderNextButton={() => {
          return (
            <div
              style={{
                userSelect: "none",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                height: "40px",
                width: "40px",
                color: "#fff",
                borderRadius: "50px",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <IoIosArrowForward size={40} />
            </div>
          );
        }}
      />
    </div>
  );
};

export default GoogleReviewsSection;
