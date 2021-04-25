import "../../App.css";
import React, { useState } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";

const ShowBasicsTools = () => {
  const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
    .mission_id;
  const [basicsList, setBasicsList] = useState([]);
  Axios.get("/basics/" + mission_id).then(
    (response) => {
      setBasicsList(response.data);
      console.log("basics", response.data);
    },
    [basicsList]
  );

  return (
    <div>
      <Container>
        <div style={{ textAlign: "center" }}>
          <b>Mission Basics Table With Tools</b>
        </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Mission_id</th>
              <th>Name</th>
              <th>Status</th>
              <th>Category</th>
              <th>Summary</th>
              <th>Notes</th>
              <th>Start_date</th>
              <th>End_date</th>
              <th>Cover_img</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* {basicsList.map((data, index) => (
              <tr key={index}>
                <td>{data.mission_id}</td>
                <td>{data.name}</td>
                <td>{data.status}</td>
                <td>{data.category}</td>
                <td>{data.summary}</td>
                <td>{data.notes}</td>
                <td>{data.start_date}</td>
                <td>{data.end_date}</td>
                <td><img src={data.cover_img} style={{width: "100px"}} alt={data.name}></img></td>
                <td>{data.description}</td>
              </tr>
            ))} */}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ShowBasicsTools;
