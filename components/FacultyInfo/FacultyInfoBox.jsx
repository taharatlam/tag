import React from "react";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const FacultyInfoBox = ({ onClose, dark, data }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`${dark
            ? "faculty-infobox-desktop-dark text-white"
            : "faculty-infobox-desktop shadow"
          } p-4 my-4 position-relative`}
      >
        <button
          className="btn-transparent position-absolute"
          style={{ right: 10, top: 10 }}
          onClick={onClose}
        >
          <FiX size={30} color={`${dark ? "white" : "black"}`} />
        </button>
        <h4 className={`${!dark && "text-theme"} text-theme fw-bold`}>
          {data?.name}
        </h4>
        <p className="fw-semiBold">{data?.designation}</p>
        <p>{data.achievements}</p>
        <p>{data.bio}</p>
      </div>
    </motion.div>
  );
};

export default FacultyInfoBox;
