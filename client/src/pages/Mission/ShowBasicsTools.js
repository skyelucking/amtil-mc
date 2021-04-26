import "../../App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";

const ShowBasicsTools = () => {
  const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
    .mission_id;

  useEffect(() => {
    Axios.get("/basics/" + mission_id).then((response) => {
      const tempArray = [];
      const tempTools = [];
      tempArray.push(response.data);
      tempTools.push(response.data.tool_details);
      setBasicsList(tempArray);
      setToolsList(tempTools);
      console.log("tempArray", tempArray);
      console.log("tempTools", tempTools)
    });
  }, []);

  const [basicsList, setBasicsList] = useState([]);
  const [toolsList, setToolsList] = useState([]);

  return (
    <div> 
      <Container>
        <div style={{ textAlign: "center" }}>
        <h1 className="PageHead">Mission Tool Box</h1>
        </div>
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
           
            {basicsList.map((data, index) => (
              <tr key={index}>
                <td>{data.tool_details[1].tool_id}</td>
                <td>{data.tool_details[1].tool_name}</td>
                <td>{data.tool_details[1].tool_category}</td>
                <td>{data.tool_details[1].tool_description}</td>

                <td>
                  <img
                    src={data.tool_details[1].tool_img}
                    style={{ width: "100px" }}
                    alt={data.tool_details[1].tool_name}
                  ></img>
                </td>

                <td>{data.tool_details[1].tool_name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ShowBasicsTools;
