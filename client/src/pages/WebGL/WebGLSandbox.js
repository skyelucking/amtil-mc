import "../../App.css";
import React, { useState } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";
import Micrometer from "./Micrometer";

const WebGLSandbox = () => {
  Axios.get("/generaldefinitions").then((response) => {
    setDefList(response.data);
  });

  const [defList, setDefList] = useState([]);

  return (
    <div>
      <Micrometer />
      <Container>
        <div class="PageHead" style={{ textAlign: "center" }}>
          <b>Definitions List</b>
        </div>  
        <Table  bordered hover size="sm">
       
          <thead>
              
            <tr>  
            <th>Definition ID</th>            
              <th>Term</th>
              <th>Definition</th>
              <th>3D Model?</th>
              <th>Animation?</th>
              <th>Footage?</th>
              <th>Image?</th>
           
            </tr>
          </thead>
          <tbody>
            {defList.map((data, index) => (
              <tr key={index}>
                <td>{data.definition_id}</td>
                <td>{data.term}</td>
                <td style={{fontSize: ".75em"}}>{data.definition_text}</td>
                <td >{data.model}</td>
                <td >{data.animation}</td>
                <td >{data.footage}</td>
                <td >{data.image}</td>
                                           
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default WebGLSandbox;