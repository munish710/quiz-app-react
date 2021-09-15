import React from "react";
import { useGlobalContext } from "../../context/context";
import { Link } from "react-router-dom";
import "./quizcard.css";

const QuizCard = ({ image_url, title, info, questions, quiz_url }) => {
  const { fetchQuestions, setQuizTitle } = useGlobalContext();
  const setupQuiz = () => {
    setQuizTitle(title);
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

        <Link to="/quiz" className="btn" onClick={setupQuiz}>
          Take Quiz
        </Link>
      </div>
    </article>
  );
};

export default QuizCard;
