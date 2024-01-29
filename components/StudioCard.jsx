import React, { useState } from "react";
import Image from "next/image";
import Overlay from "./Overlay";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import FillUpButton from "./FillUpButton";

const StudioCard = ({
  studioName,
  studioTitle,
  studioDescription,
  images,
  frontImage,
  id,
}) => {
  const [openOverlay, setOpenOverlay] = useState(false);
  const [isHovered, setHovered] = useState(false);

  return (
    <>
      <AnimatePresence>
      {openOverlay ? (
        <Overlay
          studioName={studioName}
          studioDescription={studioDescription}
          images={images}
          onClose={() => setOpenOverlay(false)}
        />
      ) : (
        ""
      )}
        </AnimatePresence>

      <div className="col-lg-3 ">
        <div
          className={`position-relative d-flex justify-content-center my-3`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            alt=""
            src={frontImage}
            // className="c-ptr"
            height="250px"
            width="250px"
            objectFit="cover"
          />

          <div
            className={` d-flex text-white position-absolute faculty-image-backdrop ${
              isHovered && "bg-tint-50"
            }`}
            // onClick={onClick}
            style={{ top: 0 }}
          >
            <AnimatePresence>
              <motion.div
                key={id}
                className="w-100 p-3 d-flex flex-column justify-content-between "
                initial={{
                  y: 0,
                }}
                animate={{ y: isHovered ? 0 : "70%" }}
                exit={{ y: 0 }}
                transition={{ duration: 0.5, when: "afterChildren" }}
              >
                <div className="d-flex h-100 justify-content-between ">
                  <div className="">
                    <h4 className=" text-shadow p-0 m-0">{studioName}</h4>
                    <motion.div
                      key={id}
                      initial={{
                        opacity: 0,
                      }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p style={{ fontSize: 16 }} className="p-0 m-0">
                        {studioTitle}
                      </p>
                    </motion.div>
                  </div>
                  <div className="ms-2 ">
                    <motion.div
                      className="ms-2"
                      initial={{
                        rotate: 0,
                      }}
                      animate={{ rotate: isHovered ? 90 : 0 }}
                      exit={{ rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FiArrowRight
                        size={24}
                        // onClick={onClose}
                      />
                    </motion.div>
                  </div>
                </div>
                {isHovered ? (
                  <motion.div
                    initial={{
                      opacity: 0,
                      zIndex: -1,
                    }}
                    animate={{ zIndex: 10, opacity: isHovered ? 1 : 0 }}
                    exit={{
                      zIndex: -1,
                      opacity: 0,
                      transition: { duration: 0.2 },
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    {!openOverlay && (
                      <FillUpButton
                        style={{ width: 150 }}
                        textClass="text-white"
                        className=" bg-transparent text-white border-0"
                        text={"View More"}
                        onClick={() => setOpenOverlay(true)}
                      />
                    )}
                  </motion.div>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudioCard;
