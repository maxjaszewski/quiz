import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quizzes from "./Quizzes";
import Header from "./Header";
import Question from "./Question";

const AppRouter = () => {
return (
    <Router>
        <div style={{ backgroundColor: "#000000", color: "white" }}>
            <Header />
            <div style={{ marginTop: "70px", minHeight: "100vh" }}>
                <Routes>
                    <Route path="/quiz" element={<Quizzes />} />
                    <Route path="/quiz/:id" element={<Question />} />
                </Routes>
            </div>
        </div>
    </Router>
);
};

export default AppRouter;
