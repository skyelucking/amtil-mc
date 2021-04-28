import "../../App.css";
import React, { useState, useEffect, View } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";
import { Checkbox } from "@material-ui/core";
import ShowSelectedEquip from "../Equipment/ShowSelectedEquip";

const MissionEquip = () => {
  const [mission_id, setMissionID] = useState(
    JSON.parse(window.sessionStorage.getItem("mission")).mission_id
  );
  const [equipList, setEquipList] = useState([]);
  const [equip_box, setEquipBox] = useState([]);

  //GETS MISSION ID FROM SESSION VARIABLE
  useEffect(() => {
    const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
      .mission_id;

    Axios.get("/equipdetails").then((response) => {
      setEquipList(response.data);
    });
  }, []);

    const mission_equiplist = (equipID) => {
    console.log("equip_id", equipID);
    Axios.post("/addequip", {
      equip_id: equipID,
      mission_id: mission_id,
    }).then((response) => {
      window.location.reload();
      console.log(response);
    })
    .catch((err) => {
alert("Equip already added.")
    })
    ;
  };

  return (
    <div>
      <Container>
        <ShowSelectedEquip />
        <h1 className="PageHead">Equipment Catalog</h1>
        <div style={{ textAlign: "center" }}></div>
        <Table bordered size="sm" style={{ marginBottom: "15px" }}>
          <thead>
            <tr>
              {/* <th>Equip Id</th> */}
              <th>Add Equipment</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {equipList.map((data, index) => (
              <tr key={data.equip_id}>
                <td>
                  <button className="button"  style={{ fontSize: '.75rem', fontWeight:"bolder", backgroundColor: "#4AB8DF", color: "black", marginTop: "2px", marginBottom: "2px", display: "flex", width: "90%"}} onClick={(e) => {
                  
                   mission_equiplist(data.equip_id); 
              }}>Add</button>
                </td>
                <td>
                  <img
                    src={data.equip_img}
                    style={{ maxWidth: "100px" }}
                    alt={data.equip_description}
                  ></img>
                </td>
                <td>{data.equip_name}</td>
                <td>{data.equip_category}</td>
                <td style={{ fontSize: ".75em" }}>{data.equip_description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default MissionEquip;
