import React from "react";
import QuizCard from "../components/QuizCard";
import SetupForm from "../components/SetupForm";

const Explore = () => {
  return (
    <section className="section page">
      <div className="section-center explore-center">
        <h4>Explore Trending Quizzes</h4>
        <hr />
        <div className="trending-quizes">
          <QuizCard />
          <QuizCard />
          <QuizCard />
        </div>
        <div className="setup-quiz">
          <h4>Setup your own Quiz!</h4>
          <hr />
          <SetupForm />
        </div>
      </div>
    </section>
  );
};

export default Explore;
