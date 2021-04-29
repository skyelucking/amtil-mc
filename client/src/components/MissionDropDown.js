import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";

const MissionDropDown = () => {
const [basicsList, setBasicsList] = useState([]);
const [missionSelect, setMissionSelect] = useState();
 
useEffect( () => {
  Axios.get("/basics").then((response) => {
    setBasicsList(response.data);
  });
}, [])

  return (
    <div>
      <Container>
      <div style={{textAlign: "center"}}>
      <b>Mission Drop Down</b></div>
        <select onChange={(e) => {
                setMissionSelect(e.target.value);
              }

        }>

        {basicsList.map((data, index) => (
          <option value={data.mission_id}>{data.name}</option>
        ))}
        </select>
        
           
      </Container>
    </div>
  );
};

export default MissionDropDown;
