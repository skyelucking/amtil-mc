import "../../App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";
import { Checkbox } from '@material-ui/core';

const MissionTools = () => {

  //GETS MISSION ID FROM SESSION VARIABLE
  useEffect(() => {
    const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
      .mission_id;
      
  }, []);
  
  //GETS TOOL LIST FOR TOOL CATALOG //
  Axios.get("/tooldetails").then((response) => {
    setToolList(response.data);
  });

  const [toolList, setToolList] = useState([]);


  //SAVES EACH TOOL TO MISSION TOOLS WHEN BOX IS CHECKED //
  const [tool_id, setToolID] = useState("");
  const [mission_id, setMissionID] = useState(JSON.parse(window.sessionStorage.getItem("mission"))
  .mission_id);
  const [tool_check, setToolCheck] = useState("");
  

  const mission_toolslist = () => {
    if (tool_check === true) {
      Axios.post("/missiontools", {
      tool_id: tool_id,
      mission_id: mission_id,
     }).then((response) => {
      console.log(response);
    });
    }else {
      Axios.delete("/missiontools", {
        tool_id: tool_id,
        mission_id: mission_id,
       }).then((response) => {
        console.log(response);
      });
    }
    
  };

  return (
    <div>
      <Container>
      <h1 className="PageHead">Tool Catalog</h1>
        <div style={{ textAlign: "center" }}></div>
        <Table bordered hover size="sm">
          <thead>
            <tr>
              {/* <th>Tool Id</th> */}
              <th >Add Tool</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              
             
            </tr>
          </thead>
          <tbody>
            {toolList.map((data, index) => (
              <tr key={data.tool_id}>
                
                <td >
                <Checkbox
                id="ToolCheck"
        checked={false}
        onChange={(e) => {
          setToolCheck(!tool_check);
          setToolID(data.tool_id);
          mission_toolslist();
        }}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
                {/* <Checkbox
        defaultunchecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        onChange={(e) => {
          setToolID(data.tool_id);
          mission_toolslist();
        }}
      /> */}
                </td>
                 <td>
                  <img
                    src={data.tool_img}
                    style={{maxWidth: "100px" }}
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
