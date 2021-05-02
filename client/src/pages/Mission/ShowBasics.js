import "../../App.css";
import React, { useState } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";

const ShowBasics = () => {
  Axios.get("/basics").then((response) => {
    setBasicsList(response.data);
  });

  const [basicsList, setBasicsList] = useState([]);

  return (
    <div>
      <Container>
        
        <Table striped bordered hover size="sm">
          <thead style={{backgroundColor: "#dbf4fd"}}>
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
                <td><button>View</button></td>
                <td><button>Edit</button></td>
               
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ShowBasics;
