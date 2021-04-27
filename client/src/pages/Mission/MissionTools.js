import "../../App.css";
import React, { useState, useEffect, View } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";
import { Checkbox } from "@material-ui/core";
import ShowBasicsTools from "./ShowBasicsTools";

const MissionTools = () => {
  const [mission_id, setMissionID] = useState(
    JSON.parse(window.sessionStorage.getItem("mission")).mission_id
  );
  const [toolList, setToolList] = useState([]);
  // const [tool_id, setToolID] = useState("");
  const [tool_box, setToolBox] = useState([]);

  //GETS MISSION ID FROM SESSION VARIABLE
  useEffect(() => {
    const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
      .mission_id;

    Axios.get("/tooldetails").then((response) => {
      setToolList(response.data);
    });
  }, []);

  //GETS TOOL LIST FOR TOOL CATALOG //

  //SAVES EACH TOOL TO MISSION TOOLS WHEN BOX IS CHECKED //
  const mission_toolbox = () => {
    Axios.get("/basics/" + mission_id)
      .then((response) => {
        console.log("basics", response.data);
      })
      .then((response) => {
        console.log(response);
        setToolBox(response);
      });
  };

  const mission_toolslist = (toolID) => {
    console.log("tool_id", toolID);
    Axios.post("/missiontools", {
      tool_id: toolID,
      mission_id: mission_id,
    }).then((response) => {
      console.log(response);
    })
    .catch((err) => {
alert("Tool already added.")
    })
    ;
  };

  return (
    <div>
      <Container>
        <ShowBasicsTools />
        <h1 className="PageHead">Tool Catalog</h1>
        <div style={{ textAlign: "center" }}></div>
        <Table bordered hover size="sm">
          <thead>
            <tr>
              {/* <th>Tool Id</th> */}
              <th>Add Tool</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {toolList.map((data, index) => (
              <tr key={data.tool_id}>
                <td>
                  <button onClick={(e) => {
                  
                   mission_toolslist(data.tool_id); 
              }}>Add</button>
                </td>
                <td>
                  <img
                    src={data.tool_img}
                    style={{ maxWidth: "100px" }}
                    alt={data.tool_description}
                  ></img>
                </td>
                <td>{data.tool_name}</td>
                <td>{data.tool_category}</td>
                <td style={{ fontSize: ".75em" }}>{data.tool_description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default MissionTools;
