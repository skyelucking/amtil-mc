import React, { useState, useEffect, Component } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "react-dom";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const TeamBox = (props) => {
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
          textAlign: "center",
          justifyContent: "center",
        }}
      >
       
        <Row>
          {basicsList.map((data, i) => (
            <Col s="12" key={i}>
              <Box>
                <img
                  src={data.avatar}
                  style={{ width: "5em", borderRadius: "75%", margin: "5px" }}
                ></img><br></br>
                <p style={{ fontSize: ".75em", margin: "0px", fontWeight: "bold" }}>{data.first_name} {data.last_name}</p> <p style={{ fontSize: ".75em", margin: "0px" }}>{data.title}</p>
              </Box>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};


export default TeamBox;
