import "../../App.css";
import React, { useState } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";

const EquipCatalog = () => {
  Axios.get("/equipdetails").then((response) => {
    setEquipList(response.data);
  });

  const [equipList, setEquipList] = useState([]);

  return (
    <div>
      <Container>
        <div class="PageHead" style={{ textAlign: "center" }}>
          <b>Equipment Catalog</b>
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
            {equipList.map((data, index) => (
              <tr key={data.equip_id}>
                
                <td>{data.equip_name}</td>
                <td>{data.equip_category}</td>
                <td style={{fontSize: ".75em"}}>{data.equip_description}</td>
                <td><img src={data.equip_img} style={{maxWidth: "100px"}} alt={data.equip_description}></img></td>
                            
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default EquipCatalog;