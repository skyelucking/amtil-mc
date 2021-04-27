import "../../App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Table, Card } from "react-bootstrap";
import { Button } from "bootstrap";

const ShowBasicsTools = () => {
  const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
    .mission_id;

  const [basicsList, setBasicsList] = useState([]);
  const [toolsList, setToolsList] = useState([]);

  useEffect(() => {
    Axios.get("/missiontools/" + mission_id).then((response) => {
      console.log(response.data);
      let tempArray = [];
      const toolList = [];
      tempArray = [...response.data.tool_details];
      setBasicsList(tempArray);
      console.log("basicsList", basicsList);
      console.log("tempArray", tempArray);
      console.log("toolList", toolList);
    });
  }, []);

  return (
    <div>
      <Container>
        <div style={{ textAlign: "center" }}>
          <h1 className="PageHead">Mission Tool Box</h1>
        </div>
        {/* {basicsList.map((data, i) => (
          <Card key={i}>{data.tool_name}
          <img
                    src={data.tool_img}
                    style={{ width: "100px" }}
                    alt={data.tool_name}
                  ></img>
          <button style={{className: Button}}>Remove</button>
          
          </Card>
        ))} */}

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Tool ID</th>
              <th>Tool Name</th>
              <th>Tool Category</th>
              <th>Tool Description </th>
              <th>Image</th>
              <th>Tool Name</th>
            </tr>
          </thead>
          <tbody>
            {basicsList.map((data, i) => (
              <tr key={i}>
                <td>{data.tool_id}</td>
                <td>{data.tool_name}</td>
                <td>{data.tool_category}</td>
                <td>{data.tool_description}</td>

                <td>
                  <img
                    src={data.tool_img}
                    style={{ width: "100px" }}
                    alt={data.tool_name}
                  ></img>
                </td>

                <td>{data.tool_name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ShowBasicsTools;
