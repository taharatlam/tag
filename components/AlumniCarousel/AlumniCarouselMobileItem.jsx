import React, { useState } from "react";
import YouTube from "react-youtube";
import Image from "next/image";
import { Modal } from "react-responsive-modal";
import { FaPlay } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const AlumniCarouselMobileItem = ({ item, type }) => {
  const [open, setOpen] = useState(false);
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
    },
  };
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const onPlayerReady = () => {};

  return (
    <div className="position-relative p-2">
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        closeIcon={
          <MdClose className="text-white" style={{ fontSize: "30px" }} />
        }
      >
        <div
          style={
            type
              ? {
                  height: "80vh",
                }
              : {}
          }
          className="border border-dark rounded-4 overflow-hidden"
        >
          <YouTube
            videoId={item.videoId}
            opts={opts}
            onReady={onPlayerReady}
            className="yt-player-mobile-container"
            style={
              type
                ? {
                    height: "80vh",
                    width: "80vw",
                  }
                : {}
            }
          />
        </div>
      </Modal>
      <Image
        alt="yt-video"
        src={item?.image}
        className="rounded border border-dark yt-thumbnail"
        // height="350px"
        height={type ? "1000px" : "350px"}
        width={type ? "560" : "650px"}
      />
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
    </div>
  );
};

export default AlumniCarouselMobileItem;
