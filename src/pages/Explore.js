import React from "react";
import QuizCard from "../components/QuizCard";
import SetupForm from "../components/SetupForm";
import { trending } from "../utils/mockData";

//url for diff quiz cards
//img

const Explore = () => {
  return (
    <section className="section page">
      <div className="section-center explore-center">
        <h4>Explore Trending Quizzes</h4>
        <hr />
        <div className="trending-quizes">
          {trending.map((quiz) => {
            const { id } = quiz;
            return <QuizCard key={id} {...quiz} />;
          })}
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
