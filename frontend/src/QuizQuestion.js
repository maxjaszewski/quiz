import React, { useState } from "react";
import Ide from "./Ide";

const QuizQuestion = ({ question, onUpdate, onDelete }) => {


  const handleUpdate = (event) => {
    event.stopPropagation();
    console.log(
      `Updating question with id ${question.id} to have query ${event.target.value}`
    );
    console.log(`old question is`);
    console.log(question)
    console.log(`new question is`);
    console.log({ ...question, query: event.target.value })
    onUpdate({ ...question, query: event.target.value });
  };
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <input
        type="text"
        value={question.query}
        // onClick={(e) => e.stopPropagation()}
        onChange={handleUpdate}
        style={{
          flex: 80,
          borderRadius: "5px",
          background: "transparent",
          color: "white",
          border: "1px solid #353531",
          boxShadow: "none",
          outline: "none",
        }}
      />
      <Ide/>
    </div>
  );
};

export default QuizQuestion;
