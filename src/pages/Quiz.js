import React, { useState } from "react";
import Rules from "../components/Rules";
import Questions from "../components/Questions";
import { useGlobalContext } from "../context/context";
import Loading from "../components/Loading";

const Quiz = () => {
  const [showRules, setShowRules] = useState(true);
  const { isLoading } = useGlobalContext();
  if (isLoading) {
    return <Loading />;
  }
  if (showRules) {
    return (
      <section className="section page">
        <Rules setShowRules={setShowRules} />
      </section>
    );
  }
  return (
    <section className="section page">
      <Questions />
    </section>
  );
};

export default Quiz;
