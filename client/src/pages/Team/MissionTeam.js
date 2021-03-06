import React, { useState, useEffect, View } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";
import ShowSelectedTeam from "../Team/ShowSelectedTeam";
import swal from '@sweetalert/with-react';

const MissionTeam = (props) => {
  
  const [teamRoster, setTeamRoster] = useState([]);
  const [team_list, setTeamList] = useState([]);
  const [basicsList, setBasicsList] = useState([]);

  //GETS MISSION ID FROM SESSION VARIABLE
  useEffect(() => {
   
    Axios.get("/teamdetails").then((response) => {
      setTeamRoster(response.data);
      Axios.get("/getteam/" + props.missionID).then((response) => {
        console.log(response.data);
        let tempArray = [];
        const teamRoster = [];
        tempArray = [...response.data.team_details];
        setBasicsList(tempArray);
      });
      });
    }, [props.missionID]);

    const mission_teamroster = (memberID) => {
      console.log("member_id", memberID);
      Axios.post("/addteam", {
        member_id: memberID,
        mission_id: props.missionID,
      })
        .then((response) => {
          const currentTeam = teamRoster.find((t) => t.member_id === memberID);
          setBasicsList([...basicsList, currentTeam]);
          setTeamRoster((prevState) =>
            prevState.filter((eq) => eq.member_id !== memberID)
          );
          console.log(response);
          swal("Team Member", "Added!", "success");
        })
        .catch((err) => {
          alert("Team Member already added. You must really like them!");
        });
    };

    return (
      <div>
        <Container>
          <ShowSelectedTeam
            basicsList={basicsList}
            setBasicsList={setBasicsList}
            setTeamRoster={setTeamRoster}
          />
          <h1 className="PageHead">Team Roster</h1>
          {/* <div style={{ textAlign: "center" }}></div> */}
          <Table bordered size="sm" style={{ marginBottom: "15px" }}>
            <thead >
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
              {teamRoster
                .filter(
                  (team) =>
                    !basicsList.find((b) => b.member_id === team.member_id)
                )
                .map((data, index) => (
                  <tr key={data.member_id}>
                    <td>
                      <button
                        className="button"
                        style={{
                          fontSize: ".75rem",
                          fontWeight: "bolder",
                          backgroundColor: "#4AB8DF",
                          color: "black",
                          marginTop: "2px",
                          marginBottom: "2px",
                          display: "flex",
                          width: "50px",
                        }}
                        onClick={(e) => {
                          mission_teamroster(data.member_id);
                        }}
                      >
                        Add
                      </button>
                    </td>
                    <td>
                      <img
                        src={data.avatar}
                        style={{ maxWidth: "5em" }}
                        alt={data.first_name}
                      ></img>
                    </td>
                    <td>
                      {data.first_name} {data.last_name}{" "}
                    </td>
                    <td>{data.title}</td>
                    <td style={{ fontSize: "1em" }}>{data.department}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>
      </div>
    )
  };
 

export default MissionTeam;
