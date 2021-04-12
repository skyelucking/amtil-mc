import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
    <Router>
      <Route path="/registration" exact render={(props) => <Registration />} />
      <Route path="/" exact render={(props) => <Login />} />
    </Router>
  );
}

export default App;
