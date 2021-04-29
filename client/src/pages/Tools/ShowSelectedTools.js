
import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table, Card, Button } from "react-bootstrap";


const ShowSelectedTools = ({ basicsList, setBasicsList, setToolList }) => {
  const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
    .mission_id;

  const [toolsList, setToolsList] = useState([]);

  const delete_tool = (i, mission_id, tool_id) => {
    console.log("mission_id", mission_id, "tool_id ", tool_id);
    Axios.delete("/missiontools/" + mission_id + "/" + tool_id).then(
      (response) => {
        setBasicsList(basicsList.filter((t) => t.tool_id !== tool_id));
        console.log(response);
      }
    );
  };

  return (
    <>
      <div>
        <Container>
          <div style={{ textAlign: "center" }}>
            <h1 className="PageHead">Mission Tool Box</h1>
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
              <Card
                className="Card"
                key={i}
                style={{ width: "12rem", margin: "10px" }}
              >
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
                    delete_tool(i, mission_id, data.tool_id);
                  }}
                >
                  Remove
                </Button>
                <Card.Img
                  variant="top"
                  style={{ width: "8rem", padding: "5px" }}
                  src={data.tool_img}
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
                    {data.tool_name}
                  </Card.Title>
                  <Card.Text
                    style={{ fontSize: ".75rem", textAlign: "center" }}
                  >
                    {data.tool_description}
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

export default ShowSelectedTools;
