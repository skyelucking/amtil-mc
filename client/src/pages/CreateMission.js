import React from "react";
import Container from 'react-bootstrap/Container';
import Tabs from "../components/Tabs";
import "../App.css";
import Basics from "./Basics";
import ToolDetails from "./ToolDetails";
import EquipDetails from "./EquipDetails";

function CreateMission() {
  return (
	  <>
      <h1 className="MenuBtn" style={{marginBottom: 10}}>Create a Mission</h1>
	 <Container style={{width: "95%"}}>
		
    
	  	<div>
			  
      <Tabs>
	  <div label="All Info">
		  <div><Basics /><ToolDetails /><EquipDetails /></div> 
         
		 
		 
        </div>
        <div label="Basics">
         <Basics />
        </div>
        <div label="Team">
          <em>Team</em>
        </div>
        <div label="Storyboard">
         
        </div>
		<div label="Procedural Steps">
         <Basics />
        </div>
		<div label="Quiz Questions">
         <Basics />
        </div>
		<div label="Tools/Equipment">
		<ToolDetails /><EquipDetails />
		
        </div>
		<div label="Styles/Color">
         <Basics />
        </div>
		<div label="Media/Documents">
         <Basics />
        </div>
		<div label="FAA References">
         <Basics />
        </div>
      </Tabs>
	  
    </div>
	</Container>
	</>
  );
}

export default CreateMission;