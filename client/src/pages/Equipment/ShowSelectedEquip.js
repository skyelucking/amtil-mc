import React, { useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button, Modal } from "react-bootstrap";
import InfoIcon from "@material-ui/icons/Info";

const ShowSelectedEquip = ({ basicsList, setBasicsList }) => {
  const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
    .mission_id;

  // const [equipList, setEquipList] = useState([]);
  const [modalData, setModalData] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (tool) => {
    setModalData(tool);
    setShow(true);
  };

  const delete_equip = (i, mission_id, equip_id) => {
    console.log("mission_id", mission_id, "equip_id ", equip_id);
    Axios.delete("/deleteequip/" + mission_id + "/" + equip_id).then(
      (response) => {
        setBasicsList(basicsList.filter((t) => t.equip_id !== equip_id));
        console.log(response);
      }
    );
  };

  return (
    <>
      <div>
        <Container>
          <div style={{ textAlign: "center" }}>
            <h1 className="PageHead">Mission Equipment</h1>
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
              <Card key={i} style={{ width: "12rem", margin: "10px" }}>
                <Card.Title
                    style={{
                      fontSize: "1rem",
                      textAlign: "center",
                      backgroundColor: "#4AB8DF",
                      
                    }}
                  >
                    {data.equip_name}
                  </Card.Title>
                <Card.Img
                  variant="top"
                  style={{ maxHeight: "150px", padding: "5px" }}
                  src={data.equip_img}
                />
                <Card.Body>
                  
                  {/* <Card.Text
                    style={{ fontSize: ".75rem", textAlign: "center" }}
                  >
                    {data.equip_description}
                  </Card.Text> */}
                </Card.Body>
                <Button
                  className="SubMenuBtn button"
                  style={{
                    fontSize: ".9rem",
                    fontWeight: "bolder",
                    backgroundColor: "#4AB8DF",
                    color: "black",
                    marginTop: "0px",
                    marginBottom: "5px",
                    display: "flex",
                  }}
                  onClick={(e) => {
                    delete_equip(i, mission_id, data.equip_id);
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
              </Card>
            ))}
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{modalData.equip_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalData.equip_description}</Modal.Body>
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

export default ShowSelectedEquip;
