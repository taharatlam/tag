import React from "react";
import ReactStars from "react-stars";
import Image from "next/image";
const GoogleReview = ({ data }) => {
  return (
    // <div className="d-flex justify-content-around">
    <div
      className="p-2 m-2 d-flex align-items-center flex-column"
      style={{ height: "412px" }}
    >
      {/* <div> */}
      <div className="d-flex align-items-start flex-column">
        <div className="img-fluid mx-auto ">
          <Image
            src={data.profile_photo_url}
            width="40px"
            height="40px"
            className="gr-avatar rounded-circle"
            alt="user_image"
          />
        </div>
        <div className="">
          <div>{data.author_name}</div>
          <div>
            <ReactStars
              count={5}
              value={data.rating}
              className="p-0 stars d-flex justify-content-center"
              size={24}
              color2={"#ffd700"}
              edit={false}
            />
          </div>
        </div>
        {/* </div> */}
        {/* <div style={{ fontSize: 12 }}>{data.relative_time_description}</div> */}
      </div>
      <div className="pt-2 w-100 align-self-stretch text-center">
        {data.text}
        {/* {data.text.substring(0, 343)}
        {data.text.length > 343 && " .........."} */}
      </div>
    </div>
    // </div>
  );
};

export default GoogleReview;
