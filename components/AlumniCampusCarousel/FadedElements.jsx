import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
const FadedElement = ({ testimonial, onClick, style, index, type }) => {
  // console.log(testimonial?.img);
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  // const opts = {
  //   height: "171px",
  //   width: "304px",
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 0,
  //   },
  // };
  return (
    <motion.div
      className="position-relative border rounded opacity-50"
      key={index}
      initial={{
        opacity: 0.5,
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      exit={{
        opacity: 0,
      }}
      onClick={onClick}
      style={style}
    >
      <Image
        alt="yt-video"
        src={testimonial?.img}
        height={type ? "530px" : "225px"}
        width={type ? "250px" : "330px"}
        className="rounded yt-thumbnail"
      />
      <div
        className="position-absolute"
        style={{
          top: "calc(50% - 25px)",
          left: "calc(50% - 25px)",
          borderRadius: "50%",
          zIndex: 99,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50px",
          width: "50px",
        }}
      >
        <FaPlay color={"white"} onClick={() => setOpen(true)} />
      </div>
    </motion.div>
  );
};

export default FadedElement;
