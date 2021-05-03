import React, { useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button, Modal } from "react-bootstrap";
import InfoIcon from "@material-ui/icons/Info";
import NoImg from  "../../Images/NoImg.jpg";

const ShowSelectedTools = ({
  basicsList,
  setBasicsList,
  setToolList,
  toolList,
}) => {
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
        setToolList([...toolList, tool]);
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
              <div
                className="Card"
                key={i}
                style={{ width: "12rem", margin: "10px" }}
              >
                <div
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    width: "100%",
                    height: "3emem",
                    backgroundColor: "#4AB8DF",
                    textAlign: "center",
                    verticalAlign: "middle",
                    marginBottom: "5px",
                    padding: "5px"
                  }}
                >
                 <div> {data.tool_category}:<br></br> {data.tool_name}
                    <br></br></div>
                   
                </div>
                {data.tool_img ? 
                <Card.Img
                  variant="top"
                  style={{
                    width: "100%",
                    padding: "5px",
                    display: "flex",
                    margin: "auto",
                  }}
                  src={data.tool_img}
                /> :
                <div><img src="https://res.cloudinary.com/amtil/image/upload/v1620072960/zwsh3nlk6ylrejbj6srj.jpg" style={{
                  width: "100%",
                  padding: "5px",
                  display: "flex",
                  margin: "auto",
                }}></img></div>
            }
                <div className="cardBody">
                  <Card.Text
                    style={{ fontSize: ".75rem", textAlign: "center" }}
                  ></Card.Text>
                  <Button
                    className="SubMenuBtn "
                    style={{
                      fontSize: ".9rem",
                      fontWeight: "bolder",
                      backgroundColor: "#4AB8DF",
                      color: "black",
                      marginTop: "5px",
                      marginBottom: "5px",
                      display: "flex",
                    }}
                    onClick={(e) => {
                      delete_tool(i, mission_id, data);
                    }}
                  >
                    Remove
                  </Button>
                  <div
                    className="cardIcon"
                    style={{fontSize: ".5rem", textAlign: "left", width: "20%", margin: "5px"}}
                    onClick={() => {
                      handleShow(data);
                    }}
                  > <InfoIcon className="cardIcon" />
                  </div>
                </div>
              </div>
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
