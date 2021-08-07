import React from "react";
import { useGlobalContext } from "../context/context";

const Quiz = () => {
  const { questions, index, correct, nextQuestion, checkAnswer } =
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
    <section className="quiz">
      <p className="correct-answers">
        correct answers : {correct}/ {index + 1}
      </p>
      <article className="container">
        <h2 dangerouslySetInnerHTML={{ __html: question }} />
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
        next question
      </button>
    </section>
  );
};

export default Quiz;
