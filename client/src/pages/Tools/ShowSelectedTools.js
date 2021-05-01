
import React, { useState} from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button, Modal  } from "react-bootstrap";


const ShowSelectedTools = ({ basicsList, setBasicsList, setToolList, toolList }) => {
  const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
    .mission_id;

 
  // const [displayDesc, setDisplayDesc] = useState([]);
  const [modalData, setModalData] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (tool) => {
    setModalData(tool);
    setShow(true);
  };

  const delete_tool = (i, mission_id, tool) => {
    console.log("mission_id", mission_id, "tool_id ", tool.Axiostool_id);
    Axios.delete("/missiontools/" + mission_id + "/" + tool.tool_id).then(
      (response) => {
        setBasicsList(basicsList.filter((t) => t.tool_id !== tool.tool_id));
        setToolList([...toolList, tool])
        console.log(response);
      }
    );
  };

  

  return (
    <>
      <div>
        <Container>
          <div style={{ textAlign: "center" }}>
            <h1 className="PageHead">Mission Tool Box</h1>
          </div>
          <div
            className="menuBox"
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              margins: "auto",
            }}
          >
            {basicsList.map((data, i) => (
              <Card
                className="Card"
                key={i}
                style={{ width: "12rem", margin: "10px" }}
              >
                <Button
                  className="SubMenuBtn button"
                  style={{
                    fontSize: ".9rem",
                    fontWeight: "bolder",
                    backgroundColor: "#4AB8DF",
                    color: "black",
                    marginTop: "5px",
                    marginBottom: "15px",
                    display: "flex",
                  }}
                  onClick={(e) => {
                    delete_tool(i, mission_id, data);
                  }}
                >
                  Remove
                </Button>
                <Card.Img
                  variant="top"
                  style={{ width: "8rem", padding: "5px" }}
                  src={data.tool_img}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: ".90rem",
                      
                      backgroundColor: "#4AB8DF",
                      textAlign: "center",
                    }}
                  >
                    {data.tool_name}
                  </Card.Title>
                  <Button
                  className="SubMenuBtn button"
                  style={{
                    fontSize: ".9rem",
                    fontWeight: "bolder",
                    backgroundColor: "#4AB8DF",
                    color: "black",
                    marginTop: "5px",
                    marginBottom: "15px",
                    display: "flex",
                  }}
                  onClick={() => {handleShow(data)}}
                >
                  Description
                </Button>
                  <Card.Text
                    style={{ fontSize: ".75rem", textAlign: "center" }}
                  >
                   
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.tool_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalData.tool_description}</Modal.Body>
        <Modal.Footer>
          <Button className="SubMenuBtn button" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        </Container>
      </div>
    </>
  );
};

export default ShowSelectedTools;
