import React from "react";
import questions from "../assets/questions.svg";
const Home = () => {
  return (
    <section className="section page hero">
      <div className="section-center hero-center">
        <div className="hero-image-container">
          <img src={questions} alt="questions" className="hero-image" />
        </div>
        <div className="hero-info">
          <h3>
            Welcome to <span className="hero-text">QuizMe</span>
          </h3>
          <p>
            Try various types of quizzes and test your knowledge.
            <br />
            Explore different categories or Create your own quiz.
          </p>
          <button className="btn">Explore Now</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
