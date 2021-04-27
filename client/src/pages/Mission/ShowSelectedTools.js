import "../../App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Table, Card } from "react-bootstrap";
import { Button } from "bootstrap";

const ShowSelectedTools = () => {
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

  const delete_tool = (i, mission_id, tool_id) => {
    console.log("mission_id", mission_id, "tool_id ", tool_id);
    Axios.delete("/missiontools/" + mission_id + "/" + tool_id).then(
      (response) => {
        setBasicsList(basicsList.filter(t => t.tool_id !== tool_id));
        console.log(response);
      }
    );
  };

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
              <th>Remove</th>
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
                <td>
                  <button
                    onClick={(e) => {
                      delete_tool(i, mission_id, data.tool_id);
                    }}
                  >
                    Remove
                  </button>
                </td>
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

export default ShowSelectedTools;
