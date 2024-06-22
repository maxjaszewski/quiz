import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quizzes from "./Quizzes";
import QuizPage from "./QuizPage";

const AppRouter = () => {
return (
    <Router>
        <div style={{ backgroundColor: "#242121", color: "white" }}>
            <div style={{ minHeight: "100vh" }}>
                <Routes>
                    <Route path="/quiz" element={<Quizzes />} />
                    <Route path="/quiz/:id" element={<QuizPage />} />
                    <Route path="/quiz/:id/round/:count" element={<QuizPage />} />
                </Routes>
            </div>
        </div>
    </Router>
);
};

export default AppRouter;
