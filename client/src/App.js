import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Basics from "./pages/Basics";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import AllTables from "./components/AllTables";
import ShowEquip from "./components/ShowEquip";
import Registration from "./pages/Registration";
import EquipDetails from "./pages/EquipDetails";
import ToolDetails from "./pages/ToolDetails";
import StageDetails from "./pages/StageDetails";
import ShowBasics from "./pages/ShowBasics";

function App() {
  return (
   
    <Router>
       <Navbar />
      <Route path="/registration" exact render={(props) => <Registration />} />
      <Route path="/" exact render={(props) => <Login />} />
      <Route path="/menu" exact render={(props) => <Menu />} />
      <Route path="/basics" exact render={(props) => <Basics />} />
      <Route path="/equipdetails" exact render={(props) => <EquipDetails />} />
      <Route path="/tooldetails" exact render={(props) => <ToolDetails />} />
      <Route path="/stagedetails" exact render={(props) => <StageDetails />} />
      <Route path="/showbasics" exact render={(props) => <ShowBasics />} />
      <Route path="/showequip" exact render={(props) => <ShowEquip/>} />
      <Route path="/alltables" exact render={(props) => <AllTables />} />
    </Router>
  );
}

export default App;
