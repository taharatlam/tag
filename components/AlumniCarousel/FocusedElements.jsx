import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import YouTube from "react-youtube";
import "react-responsive-modal/styles.css";
import { MdClose } from "react-icons/md";
import { Modal } from "react-responsive-modal";
const FocusElement = ({ testimonial, index, focusShift, type }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
    },
  };

  const onPlayerReady = () => {
    console.log("Focused video ready");
  };

  return (
    <motion.div
      key={index}
      initial={{
        opacity: 0,
        x: focusShift,
      }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{
        opacity: 0,
      }}
      className="ac-focus-element "
      style={{ zIndex: 1 }}
    >
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        closeIcon={
          <MdClose className="text-white" style={{ fontSize: "30px" }} />
        }
      >
        <div className="border border-dark rounded overflow-hidden">
          <YouTube
            videoId={testimonial.videoId}
            opts={opts}
            onReady={onPlayerReady}
            className="yt-player-desktop-container"
          />
        </div>
      </Modal>
      <div
        className="rounded border border-dark"
        style={{
          height: `${type ? "595px" : "350px"}`,
          width: `${type ? "340px" : "530px"}`,
          overflow: "hidden",
        }}
      >
        <Image
          alt="yt-video"
          src={testimonial.img}
          className="rounded yt-thumbnail"
          height={type ? "600px" : "350px"}
          width={type ? "340px" : "530px"}
        />
      </div>
      <div
        className="position-absolute"
        style={{
          top: "calc(50% - 25px)",
          left: "calc(50% - 25px)",
          borderRadius: "50%",
          zIndex: 99,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50px",
          width: "50px",
        }}
      >
        <FaPlay color={"white"} onClick={() => setOpen(true)} />
      </div>
      {/*<YouTube videoId={testimonial.videoId} opts={opts} onReady={onPlayerReady} />*/}
    </motion.div>
  );
};

export default FocusElement;
