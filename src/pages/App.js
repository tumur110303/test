import React, { useContext } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import LoginContext from "../context/LoginContext";
import Home from "./Home";
import Login from "./Login";
import Lists from "./Lists";

const App = () => {
  const context = useContext(LoginContext);

  return (
    <Router>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/list">
          <Lists />
        </Route>
        <Route path="/login">
          {context.isLoggedIn ? <Redirect to="/list" /> : <Login />}
        </Route>
      </Router>
    </Router>
  );
};

export default App;
