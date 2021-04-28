import "../../App.css";
import React, { useState } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";

const ToolCatalog = () => {
  Axios.get("/tooldetails").then((response) => {
    setToolList(response.data);
  });

  const [toolList, setToolList] = useState([]);

  return (
    <div>
      <Container>
        <div className="PageHead" style={{ textAlign: "center" }}>
          <b>Tool Catalog</b>
        </div>  
        <Table  bordered hover size="sm">
       
          <thead>
              
            <tr>              
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Image</th>
           
            </tr>
          </thead>
          <tbody>
            {toolList.map((data, index) => (
              <tr key={data.tool_id}>
                
                <td>{data.tool_name}</td>
                <td>{data.tool_category}</td>
                <td style={{fontSize: ".75em"}}>{data.tool_description}</td>
                <td><img src={data.tool_img} style={{maxWidth: "100px"}} alt={data.tool_description}></img></td>
                            
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ToolCatalog;