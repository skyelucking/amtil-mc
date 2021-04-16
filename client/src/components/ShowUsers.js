import "../App.css";
import React, { useState } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";

const ShowUsers = () => {
  Axios.get("/register").then((response) => {
    setUserList(response.data);
  });

  const [userList, setUserList] = useState([]);

  return (
    <div>
      <Container>
        <div style={{ textAlign: "center" }}>
          <b>Users Table</b>
        </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>id</th>
              <th>Email</th>
              <th>Password</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Title</th>
              <th>Username</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((data, index) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.email}</td>
                <td style={{fontSize: "7px"}}>{data.password}</td>
                <td>{data.fName}</td>
                <td>{data.lName}</td>
                <td>{data.title}</td>
                <td>{data.username}</td>
                <td>{data.createdAt}</td>
                <td>{data.updatedAt}</td>
            
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ShowUsers;
