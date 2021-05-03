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
  
  const [mission_id, setMissionID] = useState();
  const [basicsList, setBasicsList] = useState();
  const [missionDrop, setMissionDrop] = useState([]);

  useEffect(() => {
    const missionVar = window.sessionStorage.getItem("mission");
    if (!missionVar) return;
    const mission_id = JSON.parse(missionVar).mission_id;
    if (mission_id) setMissionID(mission_id);
  }, []);

  useEffect(() => {
    Axios.get("/basics/" + mission_id).then((response) => {
      setBasicsList(response.data);
    });
  }, [mission_id])

  useEffect((missionDrop) => {
    Axios.get("/basics/").then((response) => {
      let tempArray = [];
      const missionDrop = [];
      tempArray = [...response.data]
      setMissionDrop([...response.data]);
      console.log("tempArray", tempArray);
      console.log(missionDrop);
    });
  }, [])


  return (
    <>
      <h1
        className="PageHead"
        style={{ marginBottom: 15, width: "12em", padding: "5px" }}
      >
        Build your Mission!
      </h1>
      {basicsList ? (
        <Container style={{ width: "95%", display: "flex", textAlign: "center", justifyContent: "center", margin: "auto" }}>
          <div>
          <div>
              {/* Mission Basics */}
            <div className="missionBox ">
                <div style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    width: "100%",
                    height: "3emem",
                    backgroundColor: "#4AB8DF",
                    textAlign: "center",
                    verticalAlign: "middle",
                    marginBottom: "5px",
                    padding: "5px"
                  }}>Mission Basics</div>
                  {basicsList.cover_img ? <img src={basicsList.cover_img} style={{width: "100%"}}></img> :
     <div></div>
 }
              <span
                style={{
                  fontSize: ".75em",
                  opacity: "65%",
                }}
              >
                [ ID#:{basicsList.mission_id} ]
              </span><br></br>
              <span style={{ fontSize: ".9em", textAlign: "left" }}>
                <b >Name:</b> {basicsList.name}{" "}
                <br></br>
                <b >Category:</b> {basicsList.category}{" "}
                <br></br>
                <b style={{ fontSize: ".9em"}}><a href={basicsList.pm_url} target="_blank">Project Management Link</a></b>{" "}
                <br></br>
                <b >Description: </b>
                <span style={{ fontSize: ".75em" }}>{basicsList.description}</span>
              
              <br></br>
                <b  >Start Date: </b>
                <span style={{ fontSize: "1em" }}>{basicsList.start_date}</span>
             
              <br></br>
                <b >Expected End Date: </b>
                <span style={{ fontSize: "1em" }}>{basicsList.end_date}</span>
              </span>
            </div>
            {/* <ShowSelectedTeam id={basicsList.mission_id} /> */}
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
                <MissionTeam missionID={mission_id} />
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

              <div label="Procedural Steps">
                <MissionSteps />
              </div>

              <div label="Quiz Questions">
                <AddQuestion />{" "}
              </div>
              {/* <div label="References Docs">References Docs</div> */}
            </Tabs>
          </div>
        </Container>
      ) : (
        <>
        <div>No Mission Selected</div>
        <div>
      <select
      onChange={(e) => {
        setMissionID(e.target.value);
      }} >
        {missionDrop.map((data, index) => (
          <option value={data.mission_id} key={index}>{data.mission_id} - {data.name}</option>
        ))}
      </select>
    </div>
    </>

      )}
    </>
  );
}

export default CreateMission;
