import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Tabs from "../../components/Tabs";
import "../../App.css";
import MissionEquip from "../Equipment/MissionEquip";
import EquipDetails from "../Equipment/EquipDetails";
import MissionTools from "../Tools/MissionTools";
import MissionStage from "../Stage/MissionStage";
import Axios from "axios";
import StageCatalog from "../Stage/StageCatalog";
import Logo from "../../Images/transp_amtilogo.png";
import MissionTeam from "../Team/MissionTeam";
import StoryDetails from "../Storyboards/StoryDetails";
import MissionSteps from "../Steps/MissionSteps";
import AddQuestion from "../Questions/AddQuestion";

function CreateMission() {
  const [basicsList, setBasicsList] = useState();

  useEffect(() => {
    const missionVar = window.sessionStorage.getItem("mission");
    if (!missionVar) return;
    const mission_id = JSON.parse(missionVar).mission_id;
    Axios.get("/basics/" + mission_id).then((response) => {
      setBasicsList(response.data);
    });
  }, []);

  return (
    <>
      <h1
        className="PageHead"
        style={{ marginBottom: 15, width: "12em", padding: "5px" }}
      >
        Build your Mission!
      </h1>
      {basicsList ? (
        <Container style={{ width: "95%" }}>
          <div>
            <div className="missionInfo ">
              <span style={{ marginLeft: "10px", textAlign: "center" }}>
                <b style={{ fontSize: "1.25em" }}>{basicsList.name}</b>:{" "}
                {basicsList.description} <p style={{ marginLeft: "10px" }}></p>
                <p
                  style={{
                    marginLeft: "10px",
                    fontSize: ".75em",
                    opacity: "65%",
                  }}
                >
                  [ ID#:{basicsList.mission_id} ]
                </p>
              </span>
            </div>
            <Tabs>
              <div label="Welcome" className="textBlock">
                <img
                  src={Logo}
                  alt="amtil logo"
                  style={{
                    width: "20%",
                    display: "flex",
                    marginLeft: "35%",
                    marginRight: "35%",
                    marginBottom: "2px",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                ></img>
                <div className="textBlock">
                  <h4>Welcome to your Mission Builder Dashboard! </h4> Click the
                  tabs above to add the elements needed for your mission. The
                  mission will automatically be saved and can be
                  viewed/edited/deleted via the "View Missions" section. If you
                  notice something is missing, needs improvement, or is just
                  plain wonky - be sure to use the 'Give Feedback' page and let
                  us know! As with all things at AMTIL, we are in a constant
                  iteration toward a better process and product.<br></br>
                  <h4>Let's do this!</h4>
                </div>
              </div>
              <div label="Team">
                <MissionTeam />
              </div>
              <div label="Storyboard">
                <StoryDetails />
              </div>
              <div label="Stage">
                <MissionStage />
              </div>
              <div label="Tools">
                <MissionTools />
              </div>
              <div label="Equipment">
                <MissionEquip />
              </div>

              <div label="Procedural Steps"><MissionSteps /></div>
              
              <div label="Quiz Questions"><AddQuestion /> </div>
              <div label="References Docs">References Docs</div>
            </Tabs>
          </div>
        </Container>
      ) : (
        <div>No Mission Selected</div>
      )}
    </>
  );
}

export default CreateMission;
