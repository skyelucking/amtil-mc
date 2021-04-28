import "../../App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";

const ShowSelectedEquip = () => {
  const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
    .mission_id;

  const tempArray = [];
  const equipList = [];
  
    useEffect(() => {
    Axios.get("/missionequip/" + mission_id).then((response) => {
      
      tempArray.push(response.data);
      equipList.push(response.data.equipment_details);
      setBasicsList(tempArray);
      setEquipsList(equipList);
      console.log("basicsList", basicsList);
      console.log("tempArray", tempArray);
      console.log("equipList", equipList)
    });
  }, []);

  const [basicsList, setBasicsList] = useState([]);
  const [equipsList, setEquipsList] = useState([]);

  return (
    <div> 
      <Container>
        <div style={{ textAlign: "center" }}>
        <h1 className="PageHead">Mission Equipment</h1>
        </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
            
              <th>Equipment ID</th>
              <th>Equipment Name</th>
              <th>Equipment Category</th>
              <th>Equipment Description </th>
              <th>Image</th>
             
            </tr>
          </thead>
          <tbody>
           
          {basicsList.map((data, i) => (
              <tr key={i}>
                <td>{data.equipment_details[i].equip_id}</td>
                <td>{data.equipment_details[i].equip_name}</td>
                <td>{data.equipment_details[i].equip_category}</td>
                <td>{data.equipment_details[i].equip_description}</td>

                <td>
                  <img
                    src={data.equipment_details[i].equip_img}
                    style={{ width: "100px" }}
                    alt={data.equipment_details[i].equip_name}
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

export default ShowSelectedEquip;
