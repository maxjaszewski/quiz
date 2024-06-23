import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import QuizQuestion from "./QuizQuestion";

const QuizPage = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/quiz/${id}`
        );
        setQuiz(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuiz();
  }, [id]);

  const handleCreateQuestion = async () => {
    try {
      console.log(`current quiz is ${quiz}`);
      console.log(quiz);
      let newQuiz = {
        ...quiz,
        questions: quiz.questions
          ? [...quiz.questions, { query: "New Question", answer: "" }]
          : [{ query: "New Question", answer: "" }],
      };
      const response = await axios.put(
        "http://localhost:5000/api/quiz/" + id,
        newQuiz
      );
      console.log(response.data);
      setQuiz(newQuiz);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateQuestion = async (index, question) => {
    try {
        console.log(`current index is ${index}`);
        console.log(`current question is ${question}`);
        console.log(question);
      let newQuiz = {
        ...quiz,
        questions: quiz.questions.map((q, i) =>
          i === index ? { ...q, ...question } : q
        ),
      };
      console.log(`new quiz is `);
      console.log(newQuiz);
      const response = await axios.put(
        "http://localhost:5000/api/quiz/" + id,
        newQuiz
      );
      console.log(response.data);
      setQuiz(newQuiz);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteQuestion = async (index) => {
    try {
        let newQuiz = {
            ...quiz,
            questions: quiz.questions.filter((q, i) => i !== index),
        };
        const response = await axios.put(
            "http://localhost:5000/api/quiz/" + id,
            newQuiz
        );
        console.log(response.data);
        setQuiz(newQuiz);
        } catch (error) {
        console.error(error);
        }
  };


  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Link to="/quiz" style={{ position: "absolute", left: 0 }}>
          <i
            className="material-icons"
            style={{ fontSize: "3rem", padding: "20px" }}
          >
            arrow_back
          </i>
        </Link>
        <h1>{quiz && quiz.name}</h1>
      </div>
      <button
          onClick={handleCreateQuestion}
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
            cursor: "pointer",
          }}
        >
          <i className="material-icons" style={{ fontSize: "3rem" }}>
            add
          </i>
        </button>
        {quiz && quiz.questions && quiz.questions.map((question, index) => (
            <QuizQuestion
                key={index}
                question={question}
                onUpdate={(question) => handleUpdateQuestion(index, question)}
                onDelete={() => handleDeleteQuestion(index)}
            />
        ))}
    </div>
  );
};

export default QuizPage;
