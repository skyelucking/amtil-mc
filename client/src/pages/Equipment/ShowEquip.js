import "../../App.css";
import React, { useState } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";

const ShowEquip = () => {
  Axios.get("/equipdetails").then((response) => {
    setEquipList(response.data);
  });

  const [equipList, setEquipList] = useState([]);

  return (
    <div>
      <Container>
        <div style={{ textAlign: "center" }}>
          <b>Mission Equipment Table</b>
        </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Equipment_id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Cover_img</th>
              <th>Last Updated</th>
              <th>Last User</th>
            </tr>
          </thead>
          <tbody>
            {equipList.map((data, index) => (
              <tr key={data.equip_id}>
                <td>{data.equip_id}</td>
                <td>{data.equip_name}</td>
                <td>{data.equip_category}</td>
                <td>{data.equip_description}</td>
                <td><img src={data.equip_img} alt={data.equip_name} style={{maxWidth: "100px"}}></img></td>
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

export default ShowEquip;
