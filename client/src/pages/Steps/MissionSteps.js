import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";
import StepDetails from "./StepDetails";

function MissionSteps() {
  const [mission_id, setMissionID] = useState(JSON.parse(window.sessionStorage.getItem("mission")).mission_id);

  const [stepList, setStepList] = useState([]);
 let missionVar = JSON.parse(window.sessionStorage.getItem("mission")).mission_id;
  useEffect(() => {
    let missionVar = (window.sessionStorage.getItem("mission"));
   
    console.log("missionVar", missionVar)
    Axios.get("/getsteps/" + missionVar).then((response) => {
      console.log(response.data);
      setStepList(response.data);
    });
  }, []);

  return (
    <div>
      <Container style={{ textAlign: "center" }}>
        <StepDetails />
        <div style={{ textAlign: "center" }}>
          <h1 className="PageHead">Misson Steps</h1>
        </div>

        <Table bordered size="sm" style={{ marginBottom: "15px" }}>
          <thead>
            <tr>
              <th>Edit</th>
              <th>Step #</th>
              <th>Step Text</th>
              {/* <th>Image</th> */}
            </tr>
          </thead>
          <tbody>
            {stepList.map((data, index) => (
              <tr key={data.step_id}>
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
                      console.log("Edit this");
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>{data.step_order} </td>
                <td>{data.step_text} </td>
                {/* <td style={{justifyConent: "center"}}>
                  {data.step_img ? (<img
                    src={data.step_img}
                    style={{ maxWidth: "100px" }}
                    alt={data.step_text}
                  ></img>) :(<img src="https://res.cloudinary.com/amtil/image/upload/v1620072960/zwsh3nlk6ylrejbj6srj.jpg" className="panelImg" style={{width: "8rem", margins: "auto", display: "flex", justifyContent: "center"}}></img>)}
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default MissionSteps;
