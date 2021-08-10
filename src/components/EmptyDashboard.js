import React from "react";
import empty from "../assets/illustrations/empty.svg";
import { Link } from "react-router-dom";

const EmptyDashboard = () => {
  return (
    <section className="section page hero">
      <div className="section-center hero-center">
        <div className="hero-image-container">
          <img src={empty} alt="empty post box" className="hero-image" />
        </div>
        <div className="hero-info">
          <h3>No Records yet</h3>
          <p>You haven't taken any quizzes yet.</p>
          <button className="btn">
            <Link to="/explore">Explore Quizzes</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmptyDashboard;
