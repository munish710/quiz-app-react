import anime from "../assets/images/anime.jpg";
import computer_science from "../assets/images/computer_science.jpg";
import movies from "../assets/images/movies.jpg";

export const trending = [
  {
    id: 1,
    title: "Movies",
    image_url: movies,
    info: "Consider yourself a movie fanatic. Take this quiz and test your knowledge about various films and movies",
    questions: 10,
    quiz_url:
      "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple",
  },
  {
    id: 2,
    title: "Anime",
    image_url: anime,
    info: "Are you a anime and manga lover. Take this quiz and test your knowledge about anime and manga.",
    questions: 10,
    quiz_url:
      "https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple",
  },
  {
    id: 3,
    title: "Computer Science",
    image_url: computer_science,
    info: "Study Computer Science or are a self taught dev. Take this quiz and test your knowledge about Computer Science ",
    questions: 10,
    quiz_url:
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple",
  },
];
