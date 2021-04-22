import "../../App.css";
import React, { useState } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";

const UpdateMissions = () => {
  Axios.get("/updatemissions").then((response) => {
    setBasicsList(response.data);
  });

  const [basicsList, setBasicsList] = useState([]);

  return (
    <div>
      <Container>
      <div style={{textAlign: "center"}}>
      <b>Missions</b></div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Mission_id</th>
              <th>Name</th>
              <th>Status</th>
               <th>Description</th>
               <th>Update / Delete</th>
            </tr>
          </thead>
          <tbody>
            {basicsList.map((data, index) => (
              <tr key={data.mission_id}>
                <td>{data.mission_id}</td>
                <td>{data.name}</td>
                <td>{data.status}</td>
               <td>{data.description}</td>
               <td>Update / Delete </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default UpdateMissions;
