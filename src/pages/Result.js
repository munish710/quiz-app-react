import React, { useEffect } from "react";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";

const Result = () => {
  const {
    correct,
    questions,
    setCorrect,
    currentQuizUrl,
    resultsRecord,
    setResultsRecord,
    quizTitle,
  } = useGlobalContext();
  const correct_percent = ((correct / questions.length) * 100).toFixed(0);
  let newResult = {
    score: correct * 4,
    url: currentQuizUrl,
    result: correct_percent,
    title: quizTitle,
  };

  useEffect(() => {
    let tempRecords = [...resultsRecord];
    tempRecords.push(newResult);
    setResultsRecord(tempRecords);
    // eslint-disable-next-line
  }, []);

  return (
    <section className="section page">
      <div className="result">
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
          <Link to="/quiz" className="btn" onClick={() => setCorrect(0)}>
            Retake Quiz
          </Link>

          <Link to="/explore" className="btn">
            Try other Quiz
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Result;
