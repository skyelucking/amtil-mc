import "../../App.css";
import React, { useState } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";

const ShowBasics = () => {
  const [mission_id, setMissionID] = useState();
  Axios.get("/basics").then((response) => {
    setBasicsList(response.data);
  });

  const [basicsList, setBasicsList] = useState([]);

  const mission_info = (missionID) => {
    console.log("missionID: ", missionID);
    console.log("mission_id: ", mission_id);
    window.sessionStorage.setItem("mission", missionID);
    window.location.href="/missioninfo"
  };
  return (
    <div>
      <Container>
        <Table striped bordered hover size="sm">
          <thead style={{ backgroundColor: "#dbf4fd" }}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Category</th>
              <th>Description</th>
              <th>View</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {basicsList.map((data, index) => (
              <tr key={data.mission_id}>
                <td>{data.mission_id}</td>
                <td>{data.name}</td>
                <td>{data.status}</td>
                <td>{data.category}</td>
                <td>{data.description}</td>
                <td>
                  <button
                      onClick={() => {
                        console.log(data.mission_id);
                      setMissionID(data.mission_id);
                      mission_info(data.mission_id);
                    }}
                  >
                    View
                  </button>
                </td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ShowBasics;
