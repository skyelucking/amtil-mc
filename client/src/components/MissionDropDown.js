import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";

const StepsDD = () => {
  const [stepList, setStepList] = useState([]);
  const [basicsList, setBasicsList] = useState([]);
  const [missionSelect, setMissionSelect] = useState();
  const [mission_id, setMissionID] = useState(
    JSON.parse(window.sessionStorage.getItem("mission")).mission_id
  );

  useEffect(() => {
    Axios.get("/basics/").then((response) => {
      setBasicsList(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("/getsteps/" + mission_id).then((response) => {
      // console.log("step list", response.data);
      let tempArray = [];
      const stepList = [];
      tempArray = [...response.data];
      setStepList(tempArray);
      // setStepList(response.data);
      console.log("stepList", stepList);
      console.log("tempArray", tempArray);
    });
  }, []);

  return (
    <div>
      <select
        onChange={(e) => {
          setMissionSelect(e.target.value);
        }}
      >
        {stepList.map((data, index) => (
          <option value={data.missionBasicMissionId}>{data.step_text}</option>
        ))}
      </select>
    </div>
  );
};

export default StepsDD;
