import React from "react";
import { useGlobalContext } from "./context/context";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import Error from "./pages/Error";
import Result from "./pages/Result";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
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
        <ProtectedRoute path="/dashboard" exact>
          <Dashboard />
        </ProtectedRoute>
        <Route path="/result" exact>
          <Result />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
