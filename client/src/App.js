import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Basics from "./pages/Basics";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";

function App() {
  return (
   
    <Router>
       <Navbar />
      <Route path="/registration" exact render={(props) => <Registration />} />
      <Route path="/" exact render={(props) => <Login />} />
      <Route path="/menu" exact render={(props) => <Menu />} />
      <Route path="/basics" exact render={(props) => <Basics />} />
    </Router>
  );
}

export default App;
