import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table, Card, Button } from "react-bootstrap";
import swal from '@sweetalert/with-react';

const ShowSelectedTeam = ({ basicsList, setBasicsList }) => {
  const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
    .mission_id;

    const [teamRoster, setTeamRoster] = useState([]);

  const delete_team = (i, mission_id, member_id) => {
    console.log("mission_id", mission_id, "member_id ", member_id);
    Axios.delete("/deleteteam/" + mission_id + "/" + member_id).then(
      (response) => {
        setBasicsList(basicsList.filter((t) => t.member_id !== member_id));
        console.log(response);
        
        swal("Team Member", "removed!", "info");
      }
    );
  };

  return (
    <>
      <div>
        <Container>
          <div style={{ textAlign: "center" }}>
            <h1 className="PageHead" style={{ width: "12em" }}>
              Mission Team Members
            </h1>
          </div>
          <div
            className="menuBox"
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              margins: "auto",
            }}
          >
            {basicsList.map((data, i) => (
              <Card key={i} style={{ width: "12rem", margin: "10px" }}>
                <Button
                  className="SubMenuBtn button"
                  style={{
                    fontSize: ".9rem",
                    fontWeight: "bolder",
                    backgroundColor: "#4AB8DF",
                    color: "black",
                    marginTop: "5px",
                    marginBottom: "15px",
                    display: "flex",
                  }}
                  onClick={(e) => {
                    delete_team(i, mission_id, data.member_id);
                  }}
                >
                  Remove
                </Button>
                <Card.Img
                  variant="top"
                  style={{ width: "8rem", padding: "5px" }}
                  src={data.avatar}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: ".90rem",
                      textAlign: "center",
                      backgroundColor: "#4AB8DF",
                      textAlign: "center",
                    }}
                  >
                    {data.first_name} {data.last_name}
                  </Card.Title>
                  <Card.Text
                    style={{ fontSize: ".75rem", textAlign: "center" }}
                  >
                    {data.title} {data.department}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default ShowSelectedTeam;
