import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import FillUpButton from "../FillUpButton";
import Image from "next/image";

const FacultyImage = ({
  onClose,
  onClick,
  index,
  arrowIndex,
  mobile,
  data,
  tablet,
}) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <div
      className={`position-relative ${mobile && "faculty-image-mobile"} ${
        tablet && "faculty-image-tablet"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={data?.photo}
        className="c-ptr "
        style={{ objectFit: "cover" }}
        onClick={onClick}
        height={`${tablet ? "200px" : mobile ? "150px" : "270px"}`}
        width={`${tablet ? "200px" : "270px"}`}
        alt=""
      />

      <div
        className={`d-flex text-white position-absolute  w-100  h-100 faculty-image-backdrop ${
          mobile && "faculty-image-mobile"
        } ${tablet && "faculty-image-tablet"} ${
          arrowIndex === index && "bg-tint-50"
        }`}
        onClick={onClick}
        style={{ top: 0 }}
      >
        <AnimatePresence>
          <motion.div
            className="w-100 p-3 d-flex flex-column justify-content-between"
            initial={{
              y: 0,
            }}
            animate={{ y: isHovered ? 0 : tablet ? 140 : mobile ? 100 : 200 }}
            exit={{ y: 0 }}
            transition={{ duration: 0.5, when: "afterChildren" }}
          >
            <div className="d-flex h-100 justify-content-between ">
              <div className="">
                <h5
                  style={{ fontSize: (tablet && 14) || (mobile && 14) }}
                  className=" text-shadow p-0 m-0"
                >
                  {data?.name}
                </h5>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p style={{ fontSize: (tablet && 12) || (mobile && 12) }} className="p-0 m-0">
                    {data?.designation}
                  </p>
                </motion.div>
              </div>
              <div className="ms-2 ">
                <motion.div
                  className="ms-2"
                  initial={{
                    rotate: 0,
                  }}
                  animate={{ rotate: arrowIndex === index ? 90 : 0 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiArrowRight
                    style={{ marginTop: -10 }}
                    size={tablet ? 16 : 24}
                    onClick={onClose}
                  />
                </motion.div>
              </div>
            </div>
            {arrowIndex !== index ? (
              <motion.div
                initial={{
                  opacity: 0,
                  zIndex: -1,
                }}
                animate={{ zIndex: 10, opacity: isHovered ? 1 : 0 }}
                exit={{ zIndex: -1, opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.8 }}
              >
                <FillUpButton
                  style={{ width: 150 }}
                  textClass="text-white"
                  className=" bg-transparent text-white border-0"
                  text={"View More"}
                />
              </motion.div>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FacultyImage;
