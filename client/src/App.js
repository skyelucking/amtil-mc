import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Basics from "./pages/Mission/Basics";
import Login from "./pages/Admin/Login";
import Menu from "./pages/Menus/Menu";
import Navbar from "./components/Navbar";
import AllTables from "./components/AllTables";
import ShowEquip from "./components/ShowEquip";
import Registration from "./pages/Admin/Registration";
import EquipDetails from "./pages/Equipment/EquipDetails";
import ToolDetails from "./pages/Tools/ToolDetails";
import StageDetails from "./pages/Stage/StageDetails";
import ShowBasics from "./pages/Mission/ShowBasics";
import CreateMission from "./pages/Mission/CreateMission";
import AddElements from "./pages/Menus/AddElements";
import Cloudinary from "./pages/Admin/Cloudinary";
import ImgUpload from "./pages/Admin/ImgUpload";
import MissionTools from "./pages/Mission/MissionTools";
import ToolCatalog from "./pages/Tools/ToolCatalog";
import AddElementsMenu from "./pages/Menus/AddElementsMenu";


function App() {
  return (
   
    <Router>
       <Navbar />
       {/* MENUS */}
       <Route path="/menu" exact render={(props) => <Menu />} />
       <Route path="/addelementsmenu" exact render={(props) => <AddElementsMenu />} />


      <Route path="/registration" exact render={(props) => <Registration />} />
      <Route path="/" exact render={(props) => <Login />} />
      
      <Route path="/basics" exact render={(props) => <Basics />} />
      <Route path="/equipdetails" exact render={(props) => <EquipDetails />} />
      <Route path="/tooldetails" exact render={(props) => <ToolDetails />} />
      <Route path="/stagedetails" exact render={(props) => <StageDetails />} />
      <Route path="/showbasics" exact render={(props) => <ShowBasics />} />
      <Route path="/showequip" exact render={(props) => <ShowEquip/>} />
      <Route path="/alltables" exact render={(props) => <AllTables />} />
      <Route path="/createmission" exact render={(props) => <CreateMission />} />
      <Route path="/addelements" exact render={(props) => <AddElements />} />
      <Route path="/cloudinary" exact render={(props) => <Cloudinary />} />
      <Route path="/imgupload" exact render={(props) => <ImgUpload />} />
      <Route path="/missiontools" exact render={(props) => <MissionTools />} />
      <Route path="/toolcatalog" exact render={(props) => <ToolCatalog/>} />

    </Router>
  );
}

export default App;
