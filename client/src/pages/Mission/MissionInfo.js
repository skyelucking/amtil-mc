import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "../../App.css";
import Axios from "axios";
import TeamBox from "../Team/TeamBox";
import ToolBox from "../Tools/ToolBox";

function MissionInfo() {
  const [mission_id, setMissionID] = useState();
  const [basicsList, setBasicsList] = useState();
  // const [missionDrop, setMissionDrop] = useState([]);

  useEffect(() => {
    const missionVar = window.sessionStorage.getItem("mission");
    setMissionID(missionVar);
    // if (!missionVar) return;
    // const mission_id = JSON.parse(missionVar).mission_id;
    // if (mission_id) setMissionID(mission_id);
  }, []);

  useEffect(() => {
    Axios.get("/basics/" + mission_id).then((response) => {
      setBasicsList(response.data);
    });
  }, [mission_id]);

  
  return (
    <>
      <h1
        className="PageHead"
        style={{ marginBottom: 15, width: "12em", padding: "5px" }}
      >
        View Mission
      </h1>
      {basicsList ? (
        <Container style={{ width: "95%" }}>
       <div>
              {/* Mission Basics */}
            <div className="missionBox ">
                <div className="viewBoxHeader">Mission Basics</div>
                  {basicsList.cover_img ? <img src={basicsList.cover_img} style={{width: "100%"}}></img> :
     <div></div>
 }
              <span
                style={{
                  fontSize: ".75em",
                  opacity: "65%",
                }}
              >
                [ ID#: {basicsList.mission_id} ]
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
                <span style={{ fontSize: ".5em" }}>{basicsList.start_date}</span>
             
              <br></br>
                <b >Expected End Date: </b>
                <span style={{ fontSize: ".5em" }}>{basicsList.end_date}</span>
              </span>
            </div>
            <div > <TeamBox mission_id={basicsList.mission_id} className="viewBox "/></div>
            <div > <ToolBox mission_id={basicsList.mission_id} className="viewBox "/></div>
           
            </div>
        </Container>
      ) : (
        <>
          {/* <div>No Mission Selected</div>
          <div>
            <select
              onChange={(e) => {
                setMissionID(e.target.value);
              }}
            >
              {missionDrop.map((data, index) => (
                <option value={data.mission_id} key={index}>
                  {data.mission_id} - {data.name}
                </option>
              ))}
            </select>
          </div> */}
        </>
      )}
    </>
  );
}

export default MissionInfo;
