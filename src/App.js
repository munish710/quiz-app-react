import React from "react";
import { useGlobalContext } from "./context/context";

import SetupForm from "./components/SetupForm";
import Loading from "./components/Loading";
import Modal from "./components/Modal";
import Quiz from "./components/Quiz";
function App() {
  const { waiting, isLoading } = useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <Modal />
      <Quiz />
    </main>
  );
}

export default App;
