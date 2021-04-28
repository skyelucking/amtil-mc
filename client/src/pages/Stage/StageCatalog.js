import "../../App.css";
import React, { useState } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";

const StageCatalog = () => {
  Axios.get("/stagedetails").then((response) => {
    setStageList(response.data);
  });

  const [stageList, setStageList] = useState([]);

  return (
    <div>
      <Container>
        <div className="PageHead" style={{ textAlign: "center" }}>
          <b>Stage Catalog</b>
        </div>
        <Table bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {stageList.map((data, index) => (
              <tr key={data.stage_id}>
                <td>{data.stage_name}</td>

                <td style={{ fontSize: ".75em" }}>{data.stage_desc}</td>
                <td>
                  <img
                    src={data.stage_img}
                    style={{ maxWidth: "100px" }}
                    alt={data.stage_desc}
                  ></img>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default StageCatalog;
