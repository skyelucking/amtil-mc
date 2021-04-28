import "../../App.css";
import React, { useState, useEffect, View } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";
import { Checkbox } from "@material-ui/core";
import ShowSelectedTeam from "../Team/ShowSelectedTeam";

const MissionTeam = () => {
  const [mission_id, setMissionID] = useState(
    JSON.parse(window.sessionStorage.getItem("mission")).mission_id
  );
  const [teamRoster, setTeamRoster] = useState([]);
  const [team_list, setTeamList] = useState([]);

  //GETS MISSION ID FROM SESSION VARIABLE
  useEffect(() => {
    const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
      .mission_id;

    Axios.get("/teamdetails").then((response) => {
      setTeamRoster(response.data);
    });
  }, []);

  
  const mission_teamroster = (memberID) => {
    console.log("member_id", memberID);
    Axios.post("/addteam", {
      member_id: memberID,
      mission_id: mission_id,
    }).then((response) => {
      window.location.reload();
      console.log(response);
    })
    .catch((err) => {
alert("Team Member already added. You must really like them!")
    })
    ;
  };

  return (
    <div>
      <Container>
        <ShowSelectedTeam />
        <h1 className="PageHead">Team Roster</h1>
        <div style={{ textAlign: "center" }}></div>
        <Table bordered size="sm" style={{ marginBottom: "15px" }}>
          <thead>
            <tr>
              {/* <th>Tool Id</th> */}
              <th>Add to Team</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Department</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {teamRoster.map((data, index) => (
              <tr key={data.member_id}>
                <td>
                  <button className="button"  style={{ fontSize: '.75rem', fontWeight:"bolder", backgroundColor: "#4AB8DF", color: "black", marginTop: "2px", marginBottom: "2px", display: "flex", width: "90%"}} onClick={(e) => {
                  
                   mission_teamroster(data.member_id); 
              }}>Add</button>
                </td>
                <td>
                  <img
                    src={data.avatar}
                    style={{ maxWidth: "100px" }}
                    alt={data.first_name}
                  ></img>
                </td>
                <td>{data.first_name} {data.last_name} </td>
                <td>{data.title}</td>
                <td style={{ fontSize: ".75em" }}>{data.department}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default MissionTeam;
