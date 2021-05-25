import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

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

  return (
    <div>
      {" "}
      {storyPanels.map((data, index) => (
        <div className="PanelBox" key={data.storyboard_id}>
          {/* <div className="panelHead">
            Panel #{data.panel_order}{" "}
            <button
              style={{
                justifyContent: "right",
                marginLeft: "75%",
                marginBottom: "2px",
                marginTop: "2px",
                fontSize: "90%",
              }}
            >
              Edit
            </button>
          </div> */}
          <div>
            {data.panel_img ? (
              <Container
        style={{
          width: "100%",
          display: "flex",
          margin: "auto",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
       
        <Row>
        {storyPanels.map((data, index) => (

        <Col s="12" key={index}>
              
                <img
                  src={data.panel_img}
                  style={{ width: "100px", borderRadius: "75%", margin: "5px" }}
                ></img><br></br>
                
              
            </Col>
          ))}
        </Row>
      </Container>
            ) : (
              <div>
                <img
                  src="https://res.cloudinary.com/amtil/image/upload/v1620072960/zwsh3nlk6ylrejbj6srj.jpg"
                  className="panelImg"
                  style={{
                    width: "2em",
                    margins: "auto",
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></img>{" "}
              </div>
            )}
          </div>

          {/* <div className="panelText">
            {" "}
            <b>Content Notes:</b> {data.panel_notes}
            <hr></hr>
            <b>Style Notes: </b>
            {data.color_and_style}{" "}
          </div> */}
        </div>
      ))}
    </div>
  );
}

export default StoryboardBox;
