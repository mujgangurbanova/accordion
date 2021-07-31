import React from "react";
import Data from "./Data";
import AccordionSection from "./AccordionSection";
import Question from "./Question";

const Accordion = () => {
  return (
    <div className="accordion-wrapper">
      {Data.map((el,key ) => (
        <AccordionSection key= {key} title = {el.title} questions={el.questions} />
        
      ))}
      
    </div>
  );
};

export default Accordion;
