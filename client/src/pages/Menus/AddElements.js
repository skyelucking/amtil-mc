import React from "react";
import Container from "react-bootstrap/Container";
import Tabs from "../../components/Tabs";
import "../../App.css";
import ToolDetails from "../Tools/ToolDetails";
import EquipDetails from "../Equipment/EquipDetails";
import StageDetails from "../Stage/StageDetails";

function AddElements() {
  return (
    <>
      <h1 className="PageHead" style={{ marginBottom: 10 }}>
        Add New Elements
      </h1>
      <Container style={{ width: "56%" }}>
        <div>
          <Tabs>
            <div label="Tools">
              <ToolDetails />
              
            </div>
            <div label="Equipment">
              
              <EquipDetails />
            </div>
            <div label="Stage">
              <StageDetails />
            </div>
            <div label="Team">
              <em>Team Member</em>
            </div>
          </Tabs>
        </div>
      </Container>
    </>
  );
}

export default AddElements;
