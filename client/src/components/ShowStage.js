import "../App.css";
import React, { useState } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";

const ShowStage = () => {
  Axios.get("/stagedetails").then((response) => {
    setStageList(response.data);
  });

  const [stageList, setStageList] = useState([]);

  return (
    <div>
      <Container>
        <div style={{ textAlign: "center" }}>
          <b>Mission Stage Table</b>
        </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Stage ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Last Updated</th>
              <th>Last User</th>
            </tr>
          </thead>
          <tbody>
            {stageList.map((data, index) => (
              <tr key={data.stage_id}>
                <td>{data.stage_id}</td>
                <td>{data.stage_name}</td>
               
                <td>{data.stage_desc}</td>
                <td>{data.stage_img}</td>
                <td>{data.last_updated}</td>
                <td>{data.last_user}</td>
            
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ShowStage;
