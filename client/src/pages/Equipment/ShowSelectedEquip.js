import "../../App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table, Card, Button } from "react-bootstrap";
// import { Button } from "bootstrap";

const ShowSelectedEquip = () => {
  const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
    .mission_id;

  const [basicsList, setBasicsList] = useState([]);
  const [equipList, setEquipList] = useState([]);

  useEffect(() => {
    Axios.get("/missionequip/" + mission_id).then((response) => {
      console.log(response.data);
      let tempArray = [];
      const equipList = [];
      tempArray = [...response.data.equipment_details];
      setBasicsList(tempArray);
      console.log("basicsList", basicsList);
      console.log("tempArray", tempArray);
      console.log("equipList", equipList);
    });
  }, []);

  const delete_equip = (i, mission_id, equip_id) => {
    console.log("mission_id", mission_id, "equip_id ", equip_id);
    Axios.delete("/deleteequip/" + mission_id + "/" + equip_id).then(
      (response) => {
        setBasicsList(basicsList.filter(t => t.equip_id !== equip_id));
        console.log(response);
      }
    );
  };

  return (
    <>
    <div>
      <Container >
        <div style={{ textAlign: "center" }}>
          <h1 className="PageHead">Mission Equipment</h1>
        </div>
        <div className="menuBox" style={{ textAlign: "center", display: "flex", flexDirection: "row", margins: "auto" }}>

        
        {basicsList.map((data, i) => (
      <Card key={i} style={{ width: '12rem', margin: "10px" }}>
        <Button className="SubMenuBtn button"  style={{ fontSize: '.9rem', fontWeight:"bolder", backgroundColor: "#4AB8DF", color: "black", marginTop: "5px", marginBottom: "15px", display: "flex"}} onClick={(e) => {
                      delete_equip(i, mission_id, data.equip_id);
                    }}>Remove</Button>
      <Card.Img variant="top" style={{ width: '8rem', padding: "5px" }} src={data.equip_img} />
      <Card.Body>
        <Card.Title style={{ fontSize: '.90rem', textAlign: "center", backgroundColor: "#4AB8DF", textAlign: "center", }}>{data.equip_name}</Card.Title>
        <Card.Text style={{ fontSize: '.75rem', textAlign: "center" }}>
        {data.equip_description}
        </Card.Text>
        
      </Card.Body>
    </Card>
    ))}</div>
                
      </Container>
    </div>
   
        </>
  )
};

export default ShowSelectedEquip;
