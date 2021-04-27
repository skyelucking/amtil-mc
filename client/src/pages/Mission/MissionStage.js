import "../../App.css";
import React, { useState, useEffect, View } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";
import { Checkbox } from "@material-ui/core";


const MissionStage = () => {
  const [mission_id, setMissionID] = useState(
    JSON.parse(window.sessionStorage.getItem("mission")).mission_id
  );
  const [stageList, setStageList] = useState([]);
  
  const [stage_box, setStageBox] = useState([]);

  //GETS MISSION ID FROM SESSION VARIABLE
  useEffect(() => {
    const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
      .mission_id;

    Axios.get("/stagedetails").then((response) => {
      setStageList(response.data);
    });
  }, []);

  //GETS STAGE LIST FOR STAGE CATALOG //


  // const mission_toolbox = () => {
  //   Axios.get("/basics/" + mission_id)
  //     .then((response) => {
  //       console.log("basics", response.data);
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       setToolBox(response);
  //     });
  // };

  const mission_stagelist = (stageID) => {
    console.log("stage_id", stageID);
    Axios.post("/missiontools", {
      stage_id: stageID,
      mission_id: mission_id,
    }).then((response) => {
      window.location.reload();
      console.log(response);
    })
    .catch((err) => {
alert("Stage already added.")
    })
    ;
  };

  return (
    <div>
      <Container>
        {/* <ShowSelectedStage /> */}
        <h1 className="PageHead">Stage Catalog</h1>
        <div style={{ textAlign: "center" }}></div>
        <Table bordered size="sm" style={{ marginBottom: "15px" }}>
          <thead>
            <tr>
              {/* <th>Tool Id</th> */}
              <th>Add Stage</th>
              <th>Image</th>
              <th>Name</th>
               <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {stageList.map((data, index) => (
              <tr key={data.stage_id}>
                <td>
                  <button className="button"  style={{ fontSize: '.75rem', fontWeight:"bolder", backgroundColor: "#4AB8DF", color: "black", marginTop: "2px", marginBottom: "2px", display: "flex", width: "90%"}} onClick={(e) => {
                  
                   mission_stagelist(data.stage_id); 
              }}>Add</button>
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
