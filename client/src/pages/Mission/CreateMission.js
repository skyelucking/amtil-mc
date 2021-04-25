import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Tabs from "../../components/Tabs";
import "../../App.css";
import MissionEquip from "../Mission/MissionEquip"
import EquipDetails from "../Equipment/EquipDetails";
import MissionTools from "./MissionTools";
import Axios from "axios";

function CreateMission() {
  const [basicsList, setBasicsList] = useState({});

  useEffect(() => {
    const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
      .mission_id;
    Axios.get("/basics/" + mission_id).then((response) => {
      setBasicsList(response.data);
    });
  }, []);

  return (
    <>
      <h1
        className="PageHead"
        style={{ marginBottom: 10, width: "12em", padding: "5px" }}
      >
        Add Mission Details
      </h1>
      <Container style={{ width: "95%" }}>
        <div>
          <div className="missionInfo ">
            <span style={{ marginLeft: "10px" }}>
              <b>Mission ID:</b> {basicsList.mission_id}{" "}
            </span>{" "}
            <span style={{ marginLeft: "10px" }}>
              <b>Name:</b> {basicsList.name}
            </span>
           
            <span style={{ marginLeft: "10px" }}>
              <b>Description:</b> {basicsList.description}
            </span>
          </div>
          <Tabs>
            <div label="Tools">
             
              <MissionTools />
            </div>
            <div label="Equipment">
            <MissionEquip />
            </div>
            <div label="Stage">
              <em>Stage</em>
            </div>
            <div label="Team">
              <em>Team</em>
            </div>
            <div label="Storyboard"></div>
            <div label="Procedural Steps">Steps</div>
            <div label="Quiz Questions">Quiz Questions</div>

            <div label="Styles/Color">Style and Color Notes</div>
            <div label="Media/Documents">Media Documents</div>
            <div label="FAA References">FAA References</div>
          </Tabs>
        </div>
      </Container>
    </>
  );
}

export default CreateMission;
