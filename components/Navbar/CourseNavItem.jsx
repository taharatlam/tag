import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiArrowRightCircle } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const CoursesNavItem = ({
  link,
  title,
  subtitle,
  iconImage,
  containerClass,
  mobile,
}) => {

  const router = useRouter();

  const navigate = () => {
    router.push(link);
  };

  return (
    <div className="course-nav-item d-block">
      <motion.div
        initial={{
          opacity: 0,
          transition: {
            duration: 0.6,
          },
        }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        transition={{ duration: mobile ? 0.8 : 0.6 }}
        className={` ${containerClass} d-flex px-3 `}
        onClick={navigate}
      >
        <div
          style={{ minWidth: 30, maxWidth: 30 }}
          className="d-flex align-items-center me-2 "
        >
          <Image
            src={iconImage}
            height="30px"
            width="30px"
            className="course-icon-nav fade-in-image"
            alt="some name"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center flex-grow-1">
          <div>
            <h1 className="p-0 m-0 fw-bold course-nav-title ">{title}</h1>
            <div className="text-muted fw-light course-nav-subtitle ">
              {subtitle}
            </div>
          </div>
          <motion.div className="blob d-flex justify-content-center align-items-center">
            <FiArrowRight color={"black"} size={24} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
export default CoursesNavItem;
