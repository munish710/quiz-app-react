import React from "react";
import { useGlobalContext } from "./context/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import Error from "./pages/Error";

import SetupForm from "./components/SetupForm";
import Loading from "./components/Loading";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  const { waiting, isLoading } = useGlobalContext();
  // if (waiting) {
  //   return <SetupForm />;
  // }
  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    // <main>
    //   <Modal />
    //   <Quiz />
    // </main>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/explore" exact>
          <Explore />
        </Route>
        <Route path="/quiz" exact>
          <Quiz />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
