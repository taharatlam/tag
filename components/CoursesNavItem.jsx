import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRightCircle } from "react-icons/fi";
import React from "react";

const CoursesNavItem = ({ title, subtitle, iconImage, containerClass }) => {
  return (
    <div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={` ${containerClass} d-flex px-3 `}
      >
        <div style={{ minWidth: 60 }} className="d-flex align-items-center ">
          <Image
            src={iconImage}
            height="30px"
            width="30px"
            className="course-icon-mobile"
            alt="some name"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center flex-grow-1">
          <div>
            <h1 className="p-0 m-0 fw-bold">{title}</h1>
            <div className="text-muted fw-light">{subtitle}</div>
          </div>
          <div>
            <FiArrowRightCircle color={"black"} size={32} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default CoursesNavItem;
