import "../../App.css";
import React, { useState, useEffect, View } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";
import { Checkbox } from "@material-ui/core";
import ShowSelectedStage from "./ShowSelectedStage";

const MissionStage = () => {
  const [mission_id, setMissionID] = useState(
    JSON.parse(window.sessionStorage.getItem("mission")).mission_id
  );
  const [stageList, setStageList] = useState([]);
  const [stage_box, setStageBox] = useState([]);
  // let missionVar = JSON.parse(window.sessionStorage.getItem("mission")).mission_id;
  //GETS MISSION ID FROM SESSION VARIABLE
  useEffect(() => {
    let missionVar = window.sessionStorage.getItem("mission");

    Axios.get("/stagedetails").then((response) => {
      setStageList(response.data);
    });
  }, []);

  const mission_stagelist = (stageID) => {
    console.log("stage_id", stageID);
    Axios.post("/missionstage", {
      stage_id: stageID,
      mission_id: mission_id,
    })
      .then((response) => {
        window.location.reload();
        console.log(response);
      })
      .catch((err) => {
        alert("Stage already added.");
      });
  };

  return (
    <div>
      <Container>
        <ShowSelectedStage />
        <h1 className="PageHead">Stage Catalog</h1>
        <div style={{ textAlign: "center" }}></div>
        <Table bordered size="sm" style={{ marginBottom: "15px" }}>
          <thead>
            <tr>
              <th>Select Stage</th>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {stageList.map((data, index) => (
              <tr key={index}>
                <td>
                  <button
                    className="button"
                    style={{
                      fontSize: ".75rem",
                      fontWeight: "bolder",
                      backgroundColor: "#4AB8DF",
                      color: "black",
                      marginTop: "2px",
                      marginBottom: "2px",
                      display: "flex",
                      width: "90%",
                    }}
                    onClick={(e) => {
                      mission_stagelist(data.stage_id);
                    }}
                  >
                    Select
                  </button>
                </td>
                <td>
                  <img
                    src={data.stage_img}
                    style={{ maxWidth: "300px" }}
                    alt={data.stage_desc}
                  ></img>
                </td>
                <td>{data.stage_name}</td>

                <td style={{ fontSize: ".75em" }}>{data.stage_desc}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default MissionStage;
