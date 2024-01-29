import React, { useState } from "react";
import FacultyInfoBox from "./FacultyInfoBox";
import FacultyImage from "./FacultyImage";
import { dataArray } from "../../constants/data";
import { AnimatePresence, motion } from "framer-motion";

const FacultyInfoDesktop = ({ dark, dataArray }) => {
  const [infoIndex, setInfoIndex] = useState(0);
  const [arrowIndex, setArrowIndex] = useState(0);

  const assignIndices = (info, arrow) => {
    setInfoIndex(info);
    setArrowIndex(arrow);
    window.scrollBy(0, 200);
  };
  const closeInfoBox = () => {
    setInfoIndex(0);
    setArrowIndex(0);
    window.scrollBy(0, -200);
  };
  return (
    <div className=" flex-column align-items-center faculty-info-mobile">
      {dataArray.map((item, index) => (
        <AnimatePresence key={index}>
          <motion.div
            key={index}
            className="py-1 d-flex flex-column align-items-center "
          >
            <FacultyImage
              onClose={closeInfoBox}
              onClick={() => {
                arrowIndex === index + 1
                  ? closeInfoBox()
                  : assignIndices(index + 1, index + 1);
              }}
              index={index + 1}
              data={dataArray[index]}
              arrowIndex={arrowIndex}
              mobile
            />
            <AnimatePresence>
              {infoIndex === index + 1 ? (
                <FacultyInfoBox
                  onClose={closeInfoBox}
                  dark={dark}
                  data={dataArray[index]}
                />
              ) : null}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      ))}
    </div>
  );
};

export default FacultyInfoDesktop;
