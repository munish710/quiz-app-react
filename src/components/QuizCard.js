import React from "react";
import anime from "../assets/images/anime.jpg";
//computer, Film, Manga & anime
const QuizCard = () => {
  return (
    <article className="quiz-card">
      <img src={anime} alt="anime" />
      <div className="card-info">
        <h5>Title</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil neque
          voluptate optio quibusdam id ipsum?
        </p>
      </div>
      <div className="card-footer">
        <p>10 questions</p>
        <button className="btn">Take Quiz</button>
      </div>
    </article>
  );
};

export default QuizCard;
