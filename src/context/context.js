import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
  books: 10,
  videogames: 15,
  mythology: 20,
  celebrities: 26,
  vehicles: 28,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [quizTitle, setQuizTitle] = useState("");
  const [currentQuizUrl, setCurrentQuizUrl] = useState("");
  const [resultsRecord, setResultsRecord] = useState([]);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy",
  });

  const history = useHistory();
  const fetchQuestions = async (url) => {
    setCurrentQuizUrl(url);
    setCorrect(0);
    setIsLoading(true);
    const response = await axios(url).catch((err) => console.log(err));
    if (response) {
      const data = response.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setIsLoading(false);
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        history.push("/result");
        return 0;
      } else {
        return index;
      }
    });
  };

  const checkAnswer = (value) => {
    if (value) {
      setCorrect((oldState) => oldState + 1);
    }
    nextQuestion();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, category, difficulty } = quiz;
    const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`;
    setQuizTitle(category);
    fetchQuestions(url);
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        questions,
        index,
        correct,
        setCorrect,
        error,
        nextQuestion,
        checkAnswer,
        quiz,
        handleChange,
        handleSubmit,
        fetchQuestions,
        quizTitle,
        setQuizTitle,
        currentQuizUrl,
        resultsRecord,
        setResultsRecord,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
