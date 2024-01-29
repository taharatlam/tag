import React, { useState } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const FlipCards = ({ className, title, subtitle, data, bgImage, link, learnmore }) => {
  const [showBack, setShowBack] = useState(false);
  const router = useRouter();
  return (
    <div
      className={`flip-card-container position-relative ${className}`}
      onMouseEnter={() => setShowBack(true)}
      onMouseLeave={() => setShowBack(false)}
      // style={{
      //   background: `url(${bgImage}) no-repeat`,
      //   backgroundSize: "100%",
      // }}
    >
      <Image src={bgImage} className="" alt="" />

      {showBack ? (
        <motion.div
          key={title}
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 0.4 }}
          className="flip-card-overlay-details  position-absolute p-3"
        >
          <div className="text-black">
            <div
              onClick={() => router.push(link)}
              className=" c-ptr d-flex justify-content-between align-items-center my-lg-3 my-0"
            >
              <h2 className=" m-0 flip-card-details-title">{title}</h2>
              <FiArrowRight className="flip-card-details-icon" />
            </div>
            {data.map((item, idx) => (
              <p key={idx} className="m-0 flip-card-data">
                {item}
              </p>
            ))}
          </div>
        </motion.div>
      ) : (
        <div className="flip-card-overlay  position-absolute p-3">
          <div className="h-100 d-flex flex-column justify-content-end align-items-start text-white">
            <h1 className="flip-card-title" >{title}</h1>
            <p className="flip-card-subtitle" dangerouslySetInnerHTML={{ __html: learnmore && subtitle.includes('Live Sound') ? 'Certificate in <br/> Live Sound' : subtitle }}></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlipCards;
