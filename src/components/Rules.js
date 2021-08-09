import React from "react";
import { useGlobalContext } from "../context/context";

const Rules = ({ setShowRules }) => {
  const { questions } = useGlobalContext();
  return (
    <div className="rules">
      <h4>Rules</h4>
      <p>The quiz contains {questions.length} questions</p>
      <p>Each right answer carries 1 mark</p>
      <p>There is no negative marking</p>
      <p>You need 60% marks to pass</p>
      <p>All the best.</p>
      <button className="btn" onClick={() => setShowRules(false)}>
        Start Quiz
      </button>
    </div>
  );
};

export default Rules;
