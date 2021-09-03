import React from "react";
import { useGlobalContext } from "../../context/context";
import { Link } from "react-router-dom";
import "./progresscard.css";

const ProgressCard = ({ score, url, result, title }) => {
  const { fetchQuestions } = useGlobalContext();

  const retakeQuiz = () => {
    fetchQuestions(url);
  };
  return (
    <article className="progress-card">
      <div className="main-info">
        <h4>{title}</h4>
        <button className="btn" onClick={retakeQuiz}>
          <Link to="/quiz">Retake Quiz</Link>
        </button>
      </div>
      <div className="result-info">
        {result > 59 ? (
          <div className="result-tag pass-tag"> {result} | PASS</div>
        ) : (
          <div className="result-tag fail-tag"> {result} | FAIL</div>
        )}
      </div>
    </article>
  );
};

export default ProgressCard;
