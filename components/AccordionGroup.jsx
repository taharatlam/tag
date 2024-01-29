import React, { useState } from "react";
import Accordion from "./Accordion";

const AccordionGroup = ({
    large,
  accordionGroupClass,
  data,
  accordionContainerClass,
  accordionTitleClass,
  accordionContentClass,
}) => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <div className={accordionGroupClass} >
      {data?.map((faq, index) => (
        <Accordion
            large={large}
          accordionContainerClass={accordionContainerClass}
          accordionTitleClass={accordionTitleClass}
          accordionContentClass={accordionContentClass}
          key={index}
          faq={faq}
          onToggle={() => handleToggle(index)}
          active={clicked === index}
        />
      ))}
    </div>
  );
};

export default AccordionGroup;
