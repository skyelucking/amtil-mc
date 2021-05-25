import React, { useState, useEffect, Component } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "react-dom";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const TeamList = (props) => {
  const Box = (props) => <div className="box">{props.children} </div>;
  const mission_id = props.mission_id;

  const [basicsList, setBasicsList] = useState([]);

  useEffect(() => {
    Axios.get("/getteam/" + props.mission_id).then((response) => {
      console.log(response.data);
      let tempArray = [];
      // const teamRoster = [];
      tempArray = [...response.data.team_details];
      setBasicsList(tempArray);
    });
  }, [props.mission_id]);

  return (
    <>
      <Container
        style={{
          width: "100%",
          display: "flex",
          margin: "auto",
          textAlign: "left",
          justifyContent: "left",
        }}
      >
       
        <Row>
          <b style={{ fontSize: ".9em"}}>Team Roster:</b> <br></br>
          {basicsList.map((data, i) => (
          
              <p key={i} style={{ fontSize: ".9em", marginLeft: "5px", marginBottom: "0px"}}>{data.first_name} {data.last_name} ({data.title}) / </p> 
            
          ))}
        </Row>
      </Container>
    </>
  );
};


export default TeamList;
