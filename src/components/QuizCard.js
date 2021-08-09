import React from "react";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";

const QuizCard = ({ image_url, title, info, questions, quiz_url }) => {
  const { fetchQuestions } = useGlobalContext();
  const setupQuiz = () => {
    fetchQuestions(quiz_url);
  };
  return (
    <article className="quiz-card">
      <img src={image_url} alt="anime" />
      <div className="card-info">
        <h5>{title}</h5>
        <p>{info}</p>
      </div>
      <div className="card-footer">
        <p>{questions} questions</p>
        <button className="btn" onClick={setupQuiz}>
          <Link to="/quiz">Take Quiz</Link>
        </button>
      </div>
    </article>
  );
};

export default QuizCard;
