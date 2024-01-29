import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { Carousel } from "react-responsive-carousel";
import { AnimatePresence, motion } from "framer-motion";
const Overlay = ({
  onClose,
  images,
  studioDescription,
  studioName,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  return (
    <motion.div
      className="d-flex  overlay position-fixed vw-100 vh-100 "
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      aria-hidden="true"
      style={{ overflowY: "scroll" }}
    >
      <div className="container no-scrollbar" style={{ overflowY: "scroll" }}>
        <div className="row h-100 ">
          <div className="col-md-7 pt-5 d-flex flex-column justify-content-center ">
            <Carousel
              showStatus={false}
              showIndicators={false}
              className="studio-overlay-carousel "
              verticalSwipe="natural"
              swipeScrollTolerance={100}
              preventMovementUntilSwipeScrollTolerance
              infiniteLoop={true}
              showArrows={true}
              showThumbs={true}
            >
              {images.map((image, idx) => (
                <div key={idx}>
                  <img alt={""} src={image.src} className="img-fluid" />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="col-md-5 pb-5 pb-lg-0 d-flex flex-column justify-content-center ">
            <div>
              <h1 className="text-center text-md-start campus-studios-heading ">
                {studioName}
              </h1>
              <div className="d-flex justify-content-center align-content-center ">
                <p className="text-center text-md-start pt-4 pb-4  para-text campus-para-width">
                  {studioDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="bg-transparent border-0 position-absolute"
        style={{ right: 20, top: 20 }}
        onClick={onClose}
      >
        <FiX color={"white"} size={30} />
      </button>
    </motion.div>
  );
};

export default Overlay;
