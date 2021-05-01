import { Card } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import swal from '@sweetalert/with-react';
import { Container, Table } from "react-bootstrap";
import StepDetails from "./StepDetails";

function MissionSteps() {
  const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
    .mission_id;

  const [basicsList, setBasicsList] = useState([]);
  const [stepList, setStepList] = useState([]);
  var length = stepList.length;

  useEffect(() => {
    Axios.get("/getsteps/" + mission_id).then((response) => {
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
                <th>Image</th>
               
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
                          console.log("Edit this")
                        }}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      {data.step_order}{" "}
                    </td>
                    <td>
                      {data.step_text}{" "}
                    </td>
                                        <td>
                      <img
                        src={data.step_img}
                        style={{ maxWidth: "100px" }}
                        alt={data.step_text}
                      ></img>
                    </td>
                  </tr>
                ))}
            </tbody>
            </Table>
      </Container>
    </div>

);
};


export default MissionSteps;
