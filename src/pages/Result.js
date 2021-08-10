import React from "react";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";

const Result = () => {
  const { correct, questions, setCorrect } = useGlobalContext();
  const correct_percent = ((correct / questions.length) * 100).toFixed(0);
  return (
    <section className="section page">
      <div className="rules">
        <h4>
          {correct_percent > 59
            ? "Congratulations you won! "
            : "Oops, Better luck next time"}
        </h4>
        <p>Percentage = {correct_percent}%</p>
        <p>Score = {correct * 4}</p>
        <p>Correct Answers = {correct}</p>
        <p>Incorrect Answers = {questions.length - correct}</p>
        <div className="result-btn-container">
          <button className="btn" onClick={() => setCorrect(0)}>
            <Link to="/quiz">Retake Quiz</Link>
          </button>
          <button className="btn">
            <Link to="/explore">Try other Quiz</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Result;
