import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Card, Button, Row, Col, Modal } from "react-bootstrap";

function StoryboardBox({}) {
  const Box = (props) => <div className="box">{props.children} </div>;
  const [mission_id, setMissionID] = useState(
    window.sessionStorage.getItem("mission")
  );
  const [basicsList, setBasicsList] = useState([]);
  const [storyPanels, setStoryPanels] = useState([]);
  var length = storyPanels.length;

  useEffect(() => {
    Axios.get("/b_storyboards/" + mission_id).then((response) => {
      console.log("response", response.data);
      setStoryPanels(response.data);
    });
  }, []);

  const [modalData, setModalData] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (tool) => {
    setModalData(tool);
    setShow(true);
  };

  return (
    <>
      <Container
        style={{
          width: "100%",
          display: "flex",
          margin: "auto",
          textAlign: "left",
          justifyContent: "left",
        }}
      >
        <Row>
          {storyPanels.map((data, i) => (
            <Col
              key={i}
              style={{
                width: "100%",
                display: "flex",
                margin: "auto",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <Row>
                {data.panel_img ? (
                  <img
                    src={data.panel_img}
                    style={{
                      width: "250px",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      margin: "0px",
                    }}
                    onClick={() => {
                      handleShow(data);
                    }}
                  ></img>
                ) : (
                  <img
                    src="https://res.cloudinary.com/amtil/image/upload/v1620072960/zwsh3nlk6ylrejbj6srj.jpg"
                    style={{
                      width: "150px",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      margin: "0px",
                    }}
                  ></img>
                )}
                
              </Row>
              <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body><b>Notes: </b> {data.panel_notes} <hr></hr> 
            <b>Color and Style:</b> {data.color_and_style} </Modal.Body>
            <Modal.Footer>
              <Button className="SubMenuBtn button" onClick={handleClose}>
                Close
              </Button>
              
            </Modal.Footer>
          </Modal>
            </Col>
          ))}
        </Row>
        
      </Container>
    </>
  );
}

export default StoryboardBox;
