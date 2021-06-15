import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import swal from '@sweetalert/with-react';

//MENUS AND ADMIN
import AddElements from "./pages/Menus/AddElements";
import Cloudinary from "./pages/Admin/Cloudinary";
import ImgUpload from "./pages/Admin/ImgUpload";
import Login from "./pages/Admin/Login";
import Menu from "./pages/Menus/Menu";
import Topbar from "./components/Topbar";
import AllTables from "./components/AllTables";
import AddElementsMenu from "./pages/Menus/AddElementsMenu";
import Registration from "./pages/Admin/Registration";

//TICKET LOG
import Tickets from "./pages/Admin/Tickets";
import ShowTickets from "./pages/Tickets/ShowTickets";

//ADD ELEMENTS
import TeamDetails from "./pages/Team/TeamDetails";
import EquipDetails from "./pages/Equipment/EquipDetails";
import ToolDetails from "./pages/Tools/ToolDetails";
import StageDetails from "./pages/Stage/StageDetails";

//CRUD MISSIONS
import ShowBasics from "./pages/Mission/ShowBasics";
import CreateMission from "./pages/Mission/CreateMission";
import UpdateMissions from "./pages/Admin/UpdateMissions";
import ViewEditMission from "./pages/Mission/ViewEditMission";
import ViewMissions from "./pages/Mission/ViewMissions"
import Basics from "./pages/Mission/Basics";
import ViewEditDeleteMissions from "./pages/Mission/ViewEditDeleteMissions";


//CRUD TOOLS
import MissionTools from "./pages/Tools/MissionTools";
import ToolCatalog from "./pages/Tools/ToolCatalog";
import ShowSelectedTools from "./pages/Tools/ShowSelectedTools";
import ToolBox from "./pages/Tools/ToolBox";

//CRUD EQUIPMENT
import MissionEquip from "./pages/Equipment/MissionEquip";
import EquipCatalog from "./pages/Equipment/EquipCatalog";
import ShowSelectedEquip from "./pages/Equipment/ShowSelectedEquip";
import ShowEquip from "./pages/Equipment/ShowEquip";

//CRUD STAGE
import StageCatalog from "./pages/Stage/StageCatalog";

//CRUD TEAM
import MissionTeam from "./pages/Team/MissionTeam";
import MissionDropDown from "./components/MissionDropDown";
import TeamBox from "./pages/Team/TeamBox"

//CRUD STORYBOARD
import StoryDetails from "./pages/Storyboards/StoryDetails";
import MissionStoryboards from "./pages/Storyboards/MissionStoryboards";
import StoryboardBox from "./pages/Storyboards/StoryboardBox";

//CRUD STEPS
import StepDetails from "./pages/Steps/StepDetails"

//CRUD QUESTIONS
import AddQuestion from "./pages/Questions/AddQuestion"
import StepsDD from "./components/MissionDropDown";
import MissionInfo from "./pages/Mission/MissionInfo";
import MissionQuestions from "./pages/Questions/MissionQuestions";


//DEFINITIONS
import GeneralDefinition from "./pages/Definitions/DefinitionsList";




function App() {
  return (
   
    <Router>
          
 <Topbar />

{/* COMPONENTS */}
<Route path="/missiondropdown" exact render={(props) => <MissionDropDown />} />
<Route path="/stepsdd" exact render={(mission_id) => <StepsDD/>} />



{/* MENUS and ADMIN */}
     
      <Route path="/menu" exact render={(props) => <Menu />} />
      <Route path="/addelementsmenu" exact render={(props) => <AddElementsMenu />}/>
      <Route path="/registration" exact render={(props) => <Registration />} />
      <Route path="/" exact render={(props) => <Login />} />
      <Route path="/cloudinary" exact render={(props) => <Cloudinary />} />
      <Route path="/imgupload" exact render={(props) => <ImgUpload />} />
      <Route path="/updatemissions" exact render={(props) => <UpdateMissions />}/>
      <Route path="/viewedit" exact render={(props) => <ViewEditMission />} />
      <Route path="/addelements" exact render={(props) => <AddElements />} />
      

{/* TICKET LOGS */}
<Route path="/ticketcreate" exact render={(props) => <Tickets />} />
<Route path="/ticketlog" exact render={(props) => <ShowTickets />} />

{/* ADD ELEMENTS */}
      <Route path="/missionequip" exact render={(props) => <MissionEquip />} />
      <Route path="/equipdetails" exact render={(props) => <EquipDetails />} />
      <Route path="/tooldetails" exact render={(props) => <ToolDetails />} />
      <Route path="/stagedetails" exact render={(props) => <StageDetails />} />
      <Route path="/teamdetails" exact render={(props) => <TeamDetails/>} />

{/* CRUD MISSIONS*/}
      <Route path="/basics" exact render={(props) => <Basics />} />
      <Route path="/createmission" exact render={(props) => <CreateMission />} />
      <Route path="/showbasics" exact render={(props) => <ShowBasics />} />
      <Route path="/viewmissions" exact render={(props) => <ViewMissions/>} />
      <Route path="/alltables" exact render={(props) => <AllTables />} />
      <Route path="/vieweditdelete" exact render={(props) => <ViewEditDeleteMissions/>} />


{/* CRUD TOOLS*/}    
      <Route path="/toolcatalog" exact render={(props) => <ToolCatalog />} />
      <Route path="/showselectedtools" exact render={(props) => <ShowSelectedTools />} />
      <Route path="/missiontools" exact render={(props) => <MissionTools />} />
      <Route path="/toolbox" exact render={(props) => <ToolBox />} />

{/* CRUD EQUIPMENT*/}    
      <Route path="/equipcatalog" exact render={(props) => <EquipCatalog />} />
      <Route path="/showselectedequip" exact render={(props) => <ShowSelectedEquip />} />

{/* CRUD STAGE*/} 
      <Route path="/stagecatalog" exact render={(props) => <StageCatalog />} />

{/* CRUD TEAM*/}   
      <Route path="/missionteam" exact render={(props) => <MissionTeam />} />
      <Route path="/teambox" exact render={(props) => <TeamBox />} />

{/* CRUD STORYBOARDS*/}  
<Route path="/storydetails" exact render={(props) => <StoryDetails />} />
<Route path="/missionstoryboards" exact render={(props) => <MissionStoryboards/>} />
<Route path="/storyboardbox" exact render={(props) => <StoryboardBox/>} />

{/* CRUD STEPS*/} 
<Route path="/stepdetails" exact render={(props) => <StepDetails />} />

{/* CRUD QUESTIONS*/} 
<Route path="/addquestion" exact render={(props) => <AddQuestion />} />
<Route path="/missionquestions" exact render={(props) => <MissionQuestions />} />

{/* VIEW AND EDIT */}
<Route path="/missioninfo" exact render={(props) => <MissionInfo/>} />

{/* Definitions*/}
<Route path="/generaldefinitions" exact render={(props) => <GeneralDefinition />} />

      
    </Router>
  );
}

export default App;
