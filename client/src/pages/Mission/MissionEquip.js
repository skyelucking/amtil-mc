import "../../App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";
import { Checkbox } from '@material-ui/core';

const MissionEquip= () => {

  //GETS MISSION ID FROM SESSION VARIABLE
  useEffect(() => {
    const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
      .mission_id;
      
  }, []);
  
  //GETS EQUIPMENT LIST FOR TOOL CATALOG //
  Axios.get("/equipdetails").then((response) => {
    setEquipList(response.data);
  });

  const [equipList, setEquipList] = useState([]);


  //SAVES EACH TOOL TO MISSION EQUIP WHEN BOX IS CHECKED //
  const [equip_id, setEquipID] = useState("");
  const [mission_id, setMissionID] = useState(JSON.parse(window.sessionStorage.getItem("mission"))
  .mission_id);
  const [equip_check, setEquipCheck] = useState("");
  

  const mission_equiplist = () => {
    if (equip_check === true) {
      Axios.post("/missionequips", {
      equip_id: equip_id,
      mission_id: mission_id,
     }).then((response) => {
      console.log(response);
    });
    }else {
      Axios.delete("/missionequips", {
        equip_id: equip_id,
        mission_id: mission_id,
       }).then((response) => {
        console.log(response);
      });
    }
    
  };

  return (
    <div>
      <Container>
      <h1 className="PageHead">Equipment Catalog</h1>
        <div style={{ textAlign: "center" }}></div>
        <Table bordered hover size="sm">
          <thead>
            <tr>
              {/* <th>Tool Id</th> */}
              <th style={{maxWidth: "15px", fontSize: ".9em"}}>Add Equip.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              
             
            </tr>
          </thead>
          <tbody>
            {equipList.map((data, index) => (
              <tr key={data.equip_id}>
                
                <td style={{maxWidth: "10%"}} >
                <Checkbox
                id="ToolCheck"
        checked={false}
        onChange={(e) => {
          setEquipCheck(!equip_check);
          setEquipID(data.equip_id);
          mission_equiplist();
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
                 <td style={{ maxWidth: "120px" }}>
                  <img
                    src={data.equip_img}
                    style={{ maxWidth: "100px" }}
                    alt={data.equip_description}
                  ></img>
                </td>
                <td>{data.equip_name}</td>
                <td>{data.equip_category}</td>
                <td style={{ fontSize: ".75em" }}>{data.equip_description}</td>
               
               
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default MissionEquip;
