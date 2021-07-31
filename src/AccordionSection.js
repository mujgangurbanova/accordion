import React, { useState } from "react";
import Question from "./Question";

const AccordionSection = ({ title, questions }) => {
  const [whichOpen, setWhichOpen] = useState(-1);
  console.log(questions);
  return (
    <div className="header">
      <h2>{title}</h2>
      <aside className="accordion-section">
        {questions.map((questions, key) => (
          <Question
          whichOpen={whichOpen}
          setWhichOpen={setWhichOpen}
            isOpen={key === whichOpen}
            key={key}
            which={key}
            question={questions}
          />
        ))}
      </aside>
    </div>
  );
};

export default AccordionSection;
