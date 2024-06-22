import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quizzes from "./Quizzes";
import Header from "./Header";
import Question from "./Question";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <div style={{ marginTop: "60px" }}>
        <Routes>
          <Route path="/quiz" element={<Quizzes />} />
          <Route path="/quiz/:id" element={<Question />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
