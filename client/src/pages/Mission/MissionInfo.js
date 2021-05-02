import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Tabs from "../../components/Tabs";
import "../../App.css";
import Axios from "axios";
import ShowSelectedTeam from "../Team/ShowSelectedTeam";

function MissionInfo() {
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
  }, [mission_id]);

  //   useEffect((missionDrop) => {
  //     Axios.get("/basics/").then((response) => {
  //       let tempArray = [];
  //       const missionDrop = [];
  //       tempArray = [...response.data]
  //       setMissionDrop([...response.data]);
  //       console.log("tempArray", tempArray);
  //       console.log(missionDrop);
  //     });
  //   }, [])

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
              <span
                style={{
                  fontSize: ".75em",
                  opacity: "65%",
                }}
              >
                [ ID#:{basicsList.mission_id} ]
              </span><br></br>
              <span style={{ fontSize: "1em", textAlign: "left" }}>
                <b >Name:</b> {basicsList.name}{" "}
                <br></br>
                <b >Category:</b> {basicsList.category}{" "}
                <br></br>
                <b style={{ fontSize: ".75em"}}><a href={basicsList.pm_url} target="_blank">Project Management Link</a></b>{" "}
                <br></br>
                <b >Description: </b>
                <span style={{ fontSize: ".75em" }}>{basicsList.description}</span>
              </span>
            </div>
            <ShowSelectedTeam  />
          </div>
        </Container>
      ) : (
        <>
          <div>No Mission Selected</div>
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
          </div>
        </>
      )}
    </>
  );
}

export default MissionInfo;
