import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import "../../App.css";
import Axios from "axios";
import TeamBox from "../Team/TeamBox";
import TeamList from "../Team/TeamList";
import ToolBox from "../Tools/ToolBox";
import ToolList from "../Tools/ToolList";
import MissionStoryboards from "../Storyboards/MissionStoryboards";

function MissionInfo() {
  const [mission_id, setMissionID] = useState();
  const [basicsList, setBasicsList] = useState();
  const [teamList, setTeamList] = useState([]);
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
      {basicsList ? (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="viewBoxHeader" style={{ color: "white" }}>
                {basicsList.name}
              </div>
              <div className="row">
                <div
                  className="col-sm-11"
                  style={{ backgroundColor: "#caf0ff" }}
                >
                  <b>Name:</b> {basicsList.name}
                </div>
                <div
                  className="col-sm-1"
                  style={{ backgroundColor: "#caf0ff" }}
                >
                  <b>ID:</b> {basicsList.mission_id}
                </div>
              </div>
              <div className="row">
                <div
                  className="col-sm-12"
                  style={{ backgroundColor: "#caf0ff" }}
                >
                 <span style={{fontSize: ".75em"}}><b>Start Date:</b> {basicsList.start_date} </span> <span style={{marginLeft: "15px", fontSize: ".75em"}}><b>Expected End Date:</b> {basicsList.end_date}</span> 
                </div>
                
              </div>
              <div className="row">
                <div
                  className="col-sm-12"
                  style={{ backgroundColor: "#caf0ff", fontSize: ".9em" }}
                >
                  <b>Description:</b> {basicsList.description}
                </div>
              </div>
              <div className="row">
                <div
                  className="col-sm-12"
                  style={{ backgroundColor: "#caf0ff" }}
                >
                  <b style={{ fontSize: ".75em" }}>
        <a href={basicsList.pm_url} target="_blank">
        Project Management Link
        </a>
        </b>{" "}
                </div>
              </div>
              <div className="row">
                <div
                  className="col-sm-12"
                  style={{ backgroundColor: "#caf0ff" }}
                >
                 <TeamList mission_id={basicsList.mission_id}/>
                 <ToolList mission_id={basicsList.mission_id}/>
                </div>
              </div>
                          

              <div className="row justify-content-center">
                <div
                  className="col-sm-12 justify-content-center"
                  style={{ backgroundColor: "#caf0ff" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="viewBoxHeader" style={{ color: "white", marginTop: "5px" }}>
                StoryBoards
              </div>

              <div className="row justify-content-center">
                <div
                  className="col-sm-12 justify-content-center"
                  style={{ backgroundColor: "#caf0ff" }}
                >
                 <MissionStoryboards mission_id={basicsList.mission_id} />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      ) : (
        <div></div>)}
  </>)
  };
  
 

export default MissionInfo;
