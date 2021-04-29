import "../../App.css";
import React, { useState } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";

const ShowTeam = () => {
  Axios.get("/teamdetails").then((response) => {
    setTeamRoster(response.data);
  });

  const [teamRoster, setTeamRoster] = useState([]);

  return (
    <div>
      <Container>
        <div style={{ textAlign: "center" }}>
          <b>Team Members</b>
        </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Title</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {teamRoster.map((data, index) => (
              <tr key={data.member_id}>
                <td>
                  <img
                    src={data.avatar}
                    style={{ maxWidth: "150px" }}
                    alt={data.last_name}
                  ></img>
                </td>

                <td>
                  {data.first_name} {data.last_name}
                </td>
                <td>{data.title}</td>
                <td>{data.department}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ShowTeam;
