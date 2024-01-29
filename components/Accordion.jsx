import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
const Accordion = ({
  faq,
  onToggle,
  active,
  accordionContainerClass,
  accordionTitleClass,
  accordionContentClass,
    large
}) => {
  const [open, setOpen] = useState(false);
  const { question, answer } = faq;
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className={`py-2 accordion-container ${accordionContainerClass}`}>
      <div
        onClick={onToggle}
        className={`d-flex align-items-center fw-bold pb-2 ${
          active && "text-theme"
        } ${accordionTitleClass} `}
      >
        <div className="me-2">
          {active ? (
            <FiMinus size={large ? "2em" :"1em"} style={{ marginTop: -3 }} />
          ) : (
            <FiPlus size={large ? "2em" :"1em"} style={{ marginTop: -4 }} />
          )}
        </div>
        <p
          className={`${active && "text-theme focus-underline-animation"} m-0`}
          style={{fontSize:large && 35}}
        >
          {question}
        </p>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className={`ps-3 ${accordionContentClass}`}

          >
            <p style={{fontSize: large && 20}}  dangerouslySetInnerHTML={{ __html: answer }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
