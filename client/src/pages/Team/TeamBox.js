import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button } from "react-bootstrap";


const TeamBox = (props) => {
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
      
        <Container>
 
          <div
            className="viewBox"  >
              <div className="viewBoxHeader" >Team Roster</div>
            {basicsList.map((data, i) => (
              <Card key={i} style={{ width: "12rem", margin: "10px", display: "flex", margin: "auto", justifyContent: "center", textAlign: "center", border: "1px", borderStyle: "solid"  }}>
                  <Card.Title
                    style={{
                      fontSize: "1.2rem",
                      textAlign: "center",
                      backgroundColor: "#4AB8DF",
                      textAlign: "center",
                    }}
                  >
                    {data.first_name} {data.last_name}
                  </Card.Title> 
                  <Card.Img
                  variant="top"
                  style={{ width: "100%", padding: "5px", display: "flex", margin: "auto", justifyContent: "center", textAlign: "center" }}
                  src={data.avatar}
                />
                <Card.Body>
                  
                  <Card.Text
                    style={{ fontSize: "1rem", textAlign: "center" }}
                  >
                   <b>{data.title} {data.department}</b> 
                  </Card.Text><br></br>
                </Card.Body>
              </Card>
            ))}
            <button className="viewBoxEdit" >Edit</button>
          </div>
        </Container>
      
    </>
  );
};

export default TeamBox;