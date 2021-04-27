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
import MissionEquip from "./pages/Mission/MissionEquip";
import EquipCatalog from "./pages/Equipment/EquipCatalog";
import UpdateMissions from "./pages/Admin/UpdateMissions";
import ViewEditMission from "./pages/Mission/ViewEditMission";
import ShowSelectedTools from "./pages/Mission/ShowSelectedTools";
import ShowBasicsEquip from "./pages/Mission/ShowBasicsEquip";

function App() {
  return (
    <Router>
      <Navbar />
      {/* MENUS and ADMIN */}
      <Route path="/menu" exact render={(props) => <Menu />} />
      <Route
        path="/addelementsmenu"
        exact
        render={(props) => <AddElementsMenu />}
      />
      <Route path="/registration" exact render={(props) => <Registration />} />
      <Route path="/" exact render={(props) => <Login />} />

      <Route path="/cloudinary" exact render={(props) => <Cloudinary />} />
      <Route path="/imgupload" exact render={(props) => <ImgUpload />} />
      <Route path="/updatemissions" exact render={(props) => <UpdateMissions/>} />
      <Route path="/viewedit" exact render={(props) => <ViewEditMission/>} />

      
      {/* CREATE A MISSION AND ADD MISSION ELEMENTS*/}
      <Route path="/basics" exact render={(props) => <Basics />} />
      <Route
        path="/createmission"
        exact
        render={(props) => <CreateMission />}
      />
      <Route path="/missiontools" exact render={(props) => <MissionTools />} />
      <Route path="/missionequip" exact render={(props) => <MissionEquip />} />

      {/* ADD ELEMENTS */}
      <Route path="/equipdetails" exact render={(props) => <EquipDetails />} />
      <Route path="/tooldetails" exact render={(props) => <ToolDetails />} />
      <Route path="/stagedetails" exact render={(props) => <StageDetails />} />
      <Route path="/addelements" exact render={(props) => <AddElements />} />
      <Route path="/toolcatalog" exact render={(props) => <ToolCatalog />} />
      <Route path="/equipcatalog" exact render={(props) => <EquipCatalog/>} />

      {/* VIEW, UPDATE, AND DELETE MISSIONS*/}
      <Route path="/showbasics" exact render={(props) => <ShowBasics />} />
      <Route path="/showselectedtools" exact render={(props) => <ShowSelectedTools />} />
      <Route path="/showbasicsequip" exact render={(props) => <ShowBasicsEquip />} />
      <Route path="/showequip" exact render={(props) => <ShowEquip />} />
      <Route path="/alltables" exact render={(props) => <AllTables />} />
    </Router>
  );
}

export default App;
