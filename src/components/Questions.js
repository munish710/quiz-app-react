import React, { useState } from "react";
import { useGlobalContext } from "../context/context";

const Quiz = () => {
  const { questions, index, correct, nextQuestion, checkAnswer, quizTitle } =
    useGlobalContext();
  const { question, incorrect_answers, correct_answer } = questions[index];

  let answers = [...incorrect_answers];
  let tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  return (
    <div className="quiz">
      <h3 className="title">{quizTitle}</h3>
      <div className="quiz-header">
        <p>
          Q : {index + 1}/{questions.length}
        </p>
        <p>Score : {correct * 4}</p>
      </div>
      <article className="container">
        <h5 dangerouslySetInnerHTML={{ __html: question }} />
        <div className="btn-container">
          {answers.map((answer, index) => {
            return (
              <button
                key={index}
                className="answer-btn"
                dangerouslySetInnerHTML={{ __html: answer }}
                onClick={() => checkAnswer(correct_answer === answer)}
              />
            );
          })}
        </div>
      </article>
      <button className="next-question" onClick={nextQuestion}>
        Skip Question
      </button>
    </div>
  );
};

export default Quiz;
