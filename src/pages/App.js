import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginContext from "../context/LoginContext";
import Home from "./Home";
import Login from "./Login";

const App = () => {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Router>
  );
};

export default App;
