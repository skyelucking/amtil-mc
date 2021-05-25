import React, { useState, useEffect, Component } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "react-dom";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const ToolList = (props) => {
  const Box = (props) => <div className="box">{props.children} </div>;
  const mission_id = props.mission_id;

  const [basicsList, setBasicsList] = useState([]);

  useEffect(() => {
    Axios.get("/gettools/" + props.mission_id).then((response) => {
      console.log(response.data);
      let tempArray = [];
      // const teamRoster = [];
      tempArray = [...response.data.tool_details];
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
          <b style={{ fontSize: ".9em"}}>Tool List:</b> <br></br>
          {basicsList.map((data, i) => (
          
              <p key={i} style={{ fontSize: ".9em", marginLeft: "5px", padding: "0px"}}>{data.tool_name}, </p> 
            
          ))}
        </Row>
      </Container>
    </>
  );
};


export default ToolList;
