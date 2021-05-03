import "../../App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table, Card, Button } from "react-bootstrap";


const ShowSelectedStage = () => {
  const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
    .mission_id;

  const [basicsList, setBasicsList] = useState([]);
  const [stageList, setStageList] = useState([]);

  useEffect(() => {
    Axios.get("/stagedetails/" + mission_id).then((response) => {
      console.log(response.data);
      let tempArray = [];
      const stageList = [];
      tempArray = [...response.data.stage_details];
      setBasicsList(tempArray);
      console.log("basicsList", basicsList);
      console.log("tempArray", tempArray);
      console.log("stageList", stageList);
    });
  }, []);

  const delete_stage = (i, mission_id, stage_id) => {
    console.log("mission_id", mission_id, "stage_id ", stage_id);
    Axios.delete("/deletestage/" + mission_id + "/" + stage_id).then(
      (response) => {
        setBasicsList(basicsList.filter(t => t.stage_id !== stage_id));
        console.log(response);
      }
    );
  };

  return (
    <>
    <div>
      <Container >
        <div style={{ textAlign: "center" }}>
          <h1 className="PageHead">Mission Stage </h1>
        </div>
        <div className="menuBox" style={{ textAlign: "center", display: "flex", flexDirection: "row", margins: "auto" }}>

        
        {basicsList.map((data, i) => (
      <Card key={i} style={{ width: '30rem', margin: "10px" }}>
       <Card.Title style={{ fontSize: '1.2rem', textAlign: "center", backgroundColor: "#4AB8DF", textAlign: "center", }}>{data.stage_name}</Card.Title> 
      <Card.Img variant="top" style={{ width: '100%', padding: "2px" }} src={data.stage_img} />
      <Card.Body>
        
        <Card.Text style={{ fontSize: '1rem', textAlign: "center" }}>
        {data.stage_desc}
        </Card.Text>
        
      </Card.Body>
      <Button className="SubMenuBtn button"  style={{ fontSize: '.9rem', fontWeight:"bolder", backgroundColor: "#4AB8DF", color: "black", marginTop: "5px", marginBottom: "5px", display: "flex"}} onClick={(e) => {
                      delete_stage(i, mission_id, data.stage_id);
                    }}>Remove</Button>
    </Card>
    ))}</div>
                
      </Container>
    </div>
   
        </>
  )
};

export default ShowSelectedStage;
