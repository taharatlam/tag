import React from "react";
import { FiArrowRight, FiArrowRightCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
const CourseMobileCard = ({ title, subtitle, iconImage, containerClass, link }) => {
  const router = useRouter();
  return (
    <motion.button
      initial={{
        opacity: 0,
      }}
      onClick={() => {
        setTimeout(() => {
          router.push(link);
        }, 500);
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={` ${containerClass} border-0 bg-transparent d-flex px-3 courses-mobile-item w-100 pt-1`}
    >
      <div style={{ minWidth: 60 }} className="d-flex align-items-center ">
        <Image
          src={iconImage}
          height="50px"
          width="50px"
          className="course-icon-mobile"
          alt="some name"
        />
      </div>
      <div className="d-flex justify-content-between align-items-center flex-grow-1">
        <div>
          <h1 className="text-black p-0 m-0 text-start fw-bold">{title}</h1>
          <div className="text-muted text-start fw-light">{subtitle}</div>
        </div>
        <div className="courses-mobile-arrow d-flex justify-content-center align-items-center">
          <FiArrowRight color={"black"} size={30} />
        </div>
      </div>
    </motion.button>
  );
};

export default CourseMobileCard;
