import React from "react";
import team_work from "../assets/illustrations/team_work.svg";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section page hero">
      <div className="section-center hero-center">
        <div className="hero-image-container">
          <img src={team_work} alt="questions" className="hero-image" />
        </div>
        <div className="hero-info">
          <h3>
            Welcome to <span className="hero-text">QuizMe</span>
          </h3>
          <p>
            Bored? Try various types of quizzes and test your knowledge.
            <br />
            Explore different categories or create your own quiz.
          </p>

          <Link to="/explore" className="btn">
            Explore Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
