import React from "react";

const Question = ({ question, isOpen, setWhichOpen, which }) => {
  return (
    <div
      className="question-wrapper"
      onClick={() => (isOpen ? setWhichOpen(-1) : setWhichOpen(which))}
    >
      <div className="question-top">
        <strong className="question">{question.q}</strong>
        <i className={isOpen ? "fas fa-plus-circle active" : "fas fa-plus-circle"}></i>
      </div>
      <p className={isOpen ? "answer active" : "answer"}> {question.a}</p>
    </div>
  );
};

export default Question;
