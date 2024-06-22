import React, { useState, useEffect } from "react";
import QuizItem from "./QuizItem";
import "./Quizzes.css";

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/quiz")
      .then((response) => response.json())
      .then((data) => setQuizzes(data))
      .catch((error) => console.error(error));
  }, []);

  const handleCreate = () => {
    const newQuiz = 
      {
        name: "New Quiz",
        questions: [],
        rounds: []
      };

    fetch("http://localhost:5000/api/quiz", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newQuiz)
    })
      .then((response) => response.json())
      .then((data) => {
        // Add your logic here for handling the response data
        // Update the quizzes state with the new data
        setQuizzes([...quizzes, {_id: data.insertedId, ...newQuiz}]);
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (id) => {
    console.log(`Deleting quiz with id ${id}`);
    // Add your logic here for deleting the quiz
    fetch(`http://localhost:5000/api/quiz/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        // Add your logic here for handling the response data
        setQuizzes(quizzes.filter((quiz) => quiz._id !== id));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="quiz-container">
      <button
        onClick={handleCreate}
        style={{
          margin: "20px",
          background: "#00b000",
          borderRadius: "5px",
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50px",
          height: "50px",
          cursor: 'pointer'
        }}
      >
        <i className="material-icons" style={{ fontSize: '3rem' }}>add</i>
      </button>
      {quizzes.map((quiz) => (
        <QuizItem
          key={quiz._id}
          id={quiz._id}
          name={quiz.name}
          onDelete={() => handleDelete(quiz._id)}
        />
      ))}
    </div>
  );
};

export default Quizzes;
