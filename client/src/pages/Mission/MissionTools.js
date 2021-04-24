import "../../App.css";
import React, { useState, useEffect, View } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";
import { Checkbox } from "@material-ui/core";

const MissionTools = () => {
  const [toolList, setToolList] = useState([]);
  const [tool_id, setToolID] = useState("");
  const [mission_id, setMissionID] = useState(
    JSON.parse(window.sessionStorage.getItem("mission")).mission_id
  );
  const [tool_check, setToolCheck] = useState([]);
  const [selectedTools, setSelectedTools] = useState([]);
  const [toolInfo, setToolInfo] = useState([]);

  //GETS MISSION ID FROM SESSION VARIABLE
  useEffect(() => {
    const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
      .mission_id;

    Axios.get("/tooldetails").then((response) => {
      const tool_array = response.data.map((tool) => ({
        ...tool,
        checked: false,
      }));
      setToolList(tool_array);
    });

    Axios.get("/missiontools/" + mission_id).then((response) => {
      console.log("missiontools call", response.data);
      const tool_sel = response.data.map((tool) => ({
        ...tool,
        checked: false,
      }));
      setSelectedTools(tool_sel);
    });
  }, []);

  //GETS TOOL LIST FOR TOOL CATALOG //

  //SAVES EACH TOOL TO MISSION TOOLS WHEN BOX IS CHECKED //

  const mission_toolslist = (index, tool_array, toolId) => {
    if (tool_array[index].checked === true) {
      console.log("mission_id", mission_id, "tool_id", toolId);
      Axios.post("/missiontools", {
        tool_id: toolId,
        mission_id: mission_id,
      }).then((response) => {
        console.log(response);
      });
    } else {
      Axios.delete("/missiontools/" + mission_id + "/" + toolId).then(
        (response) => {
          console.log(response);
        }
      );
    }
  };

  const checkedState = (index, toolId) => {
    const tempArray = toolList;
    tempArray[index].checked = !tempArray[index].checked;
    setToolList(tempArray);
    mission_toolslist(index, tempArray, toolId);
    console.log(toolList);
  };

  const getToolInfo = (index, toolId) => {
    Axios.get("/tooldetails" + toolId).then((response) => {
      setToolInfo(response);
      console.log("tool info", toolInfo);
    });

    const tempArray = toolList;
    tempArray[index].checked = !tempArray[index].checked;
    setToolList(tempArray);
    mission_toolslist(index, tempArray, toolId);
    console.log(toolList);
  };

  return (
    <div>
      <Container>
        <h1 className="PageHead">Selected Tools</h1>
        <div style={{ textAlign: "center" }}></div>
        <Table bordered hover size="sm">
          <thead>
            <tr>
              {/* <th>Tool Id</th> */}
              <th>Remove Tool</th>
              <th>Tool ID</th>
              <th>Mission ID</th>
            </tr>
          </thead>
          <tbody>
            {selectedTools.map((data, index) => (
              <tr key={data.tool_id}>
                <td>
                  <button>Remove</button>
                </td>
                <td>{data.tool_id}</td>
                <td>{data.mission_id}</td>
                <td>
                  {/* <View>{this.getToolInfo(index, data.tool_id)}</View>
                  onLoad={(e) => {this.getToolInfo(index, data.tool_id); }} */}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <Container>
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
                  <Checkbox
                    id="ToolCheck"
                    checked={toolList[index].checked}
                    onChange={(e) => {
                      checkedState(index, data.tool_id);
                      setToolID(data.tool_id);
                    }}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
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
