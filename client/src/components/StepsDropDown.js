import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";

const StepsnDropDown = () => {
  const [mission_id, setMissionID] = useState(
    JSON.parse(window.sessionStorage.getItem("mission")).mission_id
  );
  const [basicsList, setBasicsList] = useState([]);
  const [stepSelect, setStepSelect] = useState();

  useEffect(() => {
    Axios.get("/getsteps" + mission_id).then((response) => {
      setBasicsList(response.data);
      console.log(basicsList);
    });
  }, []);

  return (
    <div>
           <select
        onChange={(e) => {
          setStepSelect(e.target.value);
        }}
      >
        {basicsList.map((data, index) => (
          <option value={data.step_text}>{data.step_text}</option>
        ))}
      </select>
    </div>
  );
};

export default StepsnDropDown;
