import React, { useState } from "react";
import Rules from "../components/Rules";
import { useGlobalContext } from "../context/context";
import Loading from "../components/Loading";

const Quiz = () => {
  const [showRules, setShowRules] = useState(true);
  const { isLoading } = useGlobalContext();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="section page">
      <Rules />
    </section>
  );
};

export default Quiz;
