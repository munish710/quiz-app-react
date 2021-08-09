import React from "react";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();

  return (
    <div>
      <form className="setup-form">
        {/* amount */}
        <div className="form-control">
          <label htmlFor="amount">number of questions</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={quiz.amount}
            onChange={handleChange}
            className="form-input"
            min={1}
            max={50}
          />
        </div>
        {/* category */}
        <div className="form-control">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            className="form-input"
            value={quiz.category}
            onChange={handleChange}
          >
            <option value="sports">sports</option>
            <option value="history">history</option>
            <option value="politics">politics</option>
          </select>
        </div>

        {/* difficulty */}
        <div className="form-control">
          <label htmlFor="difficulty">Choose Difficulty</label>
          <select
            name="difficulty"
            id="difficulty"
            className="form-input"
            value={quiz.difficulty}
            onChange={handleChange}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        {error && (
          <p className="error">
            Can't generate questions, please try different options
          </p>
        )}
        <button type="submit" onClick={handleSubmit} className="submit-btn">
          <Link to="/quiz">Start Quiz</Link>
        </button>
      </form>
    </div>
  );
};

export default SetupForm;
