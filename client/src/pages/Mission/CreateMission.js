import React from "react";
import Container from "react-bootstrap/Container";
import Tabs from "../../components/Tabs";
import "../../App.css";
import Basics from "../Mission/Basics";
import EquipDetails from "../Equipment/EquipDetails";
import MissionTools from "./MissionTools";

function CreateMission() {
  return (
    <>
      <h1 className="PageHead" style={{ marginBottom: 10 }}>
        Create a Mission
      </h1>
      <Container style={{ width: "95%" }}>
        <div>
          <Tabs>
            {/* <div label="All Info">
		  <div><Basics /><ToolDetails /><EquipDetails /></div> 
         	 
        </div> */}
            <div label="Basics">
              <Basics />
            </div>
            <div label="Tools">
              <h1 className="PageHead">Tool Catalog</h1>
              <MissionTools />
            </div>
            <div label="Equipment">
              <EquipDetails />
            </div>
            <div label="Stage">
              <em>Stage</em>
            </div>
            <div label="Team">
              <em>Team</em>
            </div>
            <div label="Storyboard"></div>
            <div label="Procedural Steps">
              Steps
            </div>
            <div label="Quiz Questions">
             Quiz Questions
            </div>

            <div label="Styles/Color">
              Style and Color Notes
            </div>
            <div label="Media/Documents">
              Media Documents
            </div>
            <div label="FAA References">
             FAA References
            </div>
          </Tabs>
        </div>
      </Container>
    </>
  );
}

export default CreateMission;
