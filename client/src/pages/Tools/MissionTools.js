import "../../App.css";
import React, { useState, useEffect, View } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";
import { Checkbox } from "@material-ui/core";
import ShowSelectedTools from "../Tools/ShowSelectedTools";

const MissionTools = () => {
  const [mission_id, setMissionID] = useState(
    JSON.parse(window.sessionStorage.getItem("mission")).mission_id
  );
  const [toolList, setToolList] = useState([]);
  const [tool_box, setToolBox] = useState([]);
 const [basicsList, setBasicsList] = useState([]);
 
 //GETS MISSION ID FROM SESSION VARIABLE
  useEffect(() => {
    const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
      .mission_id;

    Axios.get("/tooldetails").then((response) => {
      setToolList(response.data);
      Axios.get("/missiontools/" + mission_id).then((response) => {
        console.log(response.data);
        let tempArray = [];
        const toolList = [];
        tempArray = [...response.data.tool_details];
        setBasicsList(tempArray);
        console.log("basicsList", basicsList);
        console.log("tempArray", tempArray);
        console.log("toolList", toolList);
      });
    });
  }, []);
 
    const addTool = (toolID) => {
    console.log("tool_id", toolID);
    Axios.post("/missiontools", {
      tool_id: toolID,
      mission_id: mission_id,
    })
      .then((response) => {
        const currentTool = toolList.find(t => t.tool_id === toolID)
        setBasicsList([...basicsList, currentTool])
        setToolList(toolList.filter(t => t.tool_id !== currentTool.tool_id));
        console.log(response);
      })
      .catch((err) => {
        alert("Tool already added.");
      });
  };

  return (
    <div>
      <Container>
        <ShowSelectedTools basicsList={basicsList} setBasicsList={setBasicsList} setToolList={setToolList} toolList={toolList}/>
        <h1 className="PageHead">Tool Catalog</h1>
        <div style={{ textAlign: "center" }}></div>
        <Table bordered size="sm" style={{ marginBottom: "15px" }}>
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
            {toolList.filter(tool => !basicsList.find(b => b.tool_id === tool.tool_id)).map((data, index) => (
              <tr key={data.tool_id}>
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
                      addTool(data.tool_id);
                    }}
                  >
                    Add
                  </button>
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
