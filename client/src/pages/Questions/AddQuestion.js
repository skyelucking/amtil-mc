import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../App.css";
// import MissionStoryboards from "./MissionQuestions";
import swal from "@sweetalert/with-react";
import StepsDD from "../../components/MissionDropDown";
import MissionQuestions from "./MissionQuestions";
import { Container, Table, tr, td, Button } from "react-bootstrap";
// import InfoIcon from "@material-ui/icons/Info";

Axios.defaults.withCredentials = true;

export default function AddQuestion() {
  const [mission_id, setMissionID] = useState(
    JSON.parse(window.sessionStorage.getItem("mission")).mission_id
  );
  // const [modalData, setModalData] = useState({});
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = (tool) => {
  //   setModalData(tool);
  //   setShow(true);
  // };


  // Start of Cloudinary Upload
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [questionList, setQuestionList] = useState([]);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "amtilunsigned");
    setLoading(true);
    const res = await fetch(
      "	https://api.cloudinary.com/v1_1/amtil/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);

    return file.secure_url;
  };

  //End of Cloudinary Upload//

  useEffect(() => {
    Axios.get("/getsteps/" + mission_id).then((response) => {
      // console.log("step list", response.data);
      let tempArray = [];
      const stepList = [];
      tempArray = [...response.data];
      setStepList(tempArray);
      // setStepList(response.data);
      console.log("stepList", stepList);
      console.log("tempArray", tempArray);
    });
  }, []);

  const [stepList, setStepList] = useState([]);
  const [q_order, setQuestionOrder] = useState("");
  const [q_text, setQtext] = useState("");
  const [q_ansA, setQansA] = useState("");
  const [q_ansB, setQansB] = useState("");
  const [q_ansC, setQansC] = useState("");
  const [q_ansD, setQansD] = useState("");
  const [q_ansE, setQansE] = useState("");
  const [q_ansCorrect, setQansCorrect] = useState("");
  const [q_position, setQPosition] = useState("");
  const [q_img, setQImg] = useState("");
  const [posDD, setPosDD] = useState("");
  const [stepDD, setStepDD] = useState("");
 
  var questPos = posDD + " # " + stepDD;
  

  

  const post_questions = () => {
    console.log("mission_id", mission_id);
    Axios.post("/postquestions", {
      q_order: q_order,
      q_text: q_text,
      q_ansA: q_ansA,
      q_ansB: q_ansB,
      q_ansC: q_ansC,
      q_ansD: q_ansD,
      q_ansE: q_ansE,
      q_ansCorrect: q_ansCorrect,
      q_position: posDD + " " + stepDD,
      q_img: image,
      mission_id: mission_id,
    }).then((response) => {
      console.log(response);
      swal("Question", "Added!", "success");
    });
  };

   var questNum = questionList.length;

  return (
    <>
    
    
      <div className="container"> 
      <MissionQuestions />
      {/* <div
                    className="cardIcon"
                    style={{fontSize: ".5rem", textAlign: "left", width: "20%", margin: "5px"}}
                    onClick={() => {
                      handleShow(data);
                    }}
                  > <InfoIcon className="cardIcon" />
                  </div> */}
        <h3 className="PageHead" style={{ width: "12em" }}>
          Pop-Up Question
        </h3>
        <div className="inputBox" style={{ width: "50em" }}>
          <div>
            Question{" "}
            <input
              className="addElement"
              placeholder=" #"
              type="number"
              style={{ width: "50px" }}
              onChange={(e) => {
                setQuestionOrder(e.target.value);
              }}
            />{" "}
            of {questNum} Questions{" "}
          </div>
          <textarea
            className="addElement"
            placeholder="Question Text"
            style={{ height: "75px", width: "500px" }}
            onChange={(e) => {
              setQtext(e.target.value);
            }}
          />
          {/* <textarea
            className="addElement"
            placeholder="Style and Color Notes"
            style={{ height: "25px", width: "500px", padding: "3px" }}
            onChange={(e) => {
              setQansA(e.target.value);
              setCorrectSel();
            }}
          /> */}
          <textarea
            className="addElement"
            placeholder="Answer A"
            style={{ height: "25px", width: "500px", padding: "3px" }}
            onChange={(e) => {
              setQansA(e.target.value);
            }}
          />
          <textarea
            className="addElement"
            placeholder="Answer B"
            style={{ height: "25px", width: "500px", padding: "3px" }}
            onChange={(e) => {
              setQansB(e.target.value);
            }}
          />
          <textarea
            className="addElement"
            placeholder="Answer C"
            style={{ height: "25px", width: "500px", padding: "3px" }}
            onChange={(e) => {
              setQansC(e.target.value);
            }}
          />
          <textarea
            className="addElement"
            placeholder="Answer D"
            style={{ height: "25px", width: "500px", padding: "3px" }}
            onChange={(e) => {
              setQansD(e.target.value);
            }}
          />
          <textarea
            className="addElement"
            placeholder="Answer E"
            style={{ height: "25px", width: "500px", padding: "3px" }}
            onChange={(e) => {
              setQansE(e.target.value);
            }}
          />{" "}
          <div
            style={{
              textAlign: "left",
              width: "510px",
              height: "100px",
              marginTop: "10px",
              border: "2px",
              borderStyle: "solid",
              borderColor: "grey",
              padding: "3px",
            }}
          >
            <div
              style={{
                width: "100%",
                backgroundColor: "#4AB8DF",
                textAlign: "center",
              }}
            >
              <b>Correct Answer</b>
            </div>
            <select
              style={{
                width: "500px",
                height: "25px",
                marginTop: "5px",
                marginBottom: "5px",
              }}
              onChange={(e) => {
                setQansCorrect(e.target.value);
              }}
            >
              <option
                value=""
                placeholder="Select the Correct Answer Below"
                style={{
                  opacity: "0.65",
                }}
              >
                Select the Correct Answer Below
              </option>
              <option value={q_ansA}>{q_ansA}</option>
              <option value={q_ansB}>{q_ansB}</option>
              <option value={q_ansC}>{q_ansC}</option>
              <option value={q_ansD}>{q_ansD}</option>
              <option value={q_ansE}>{q_ansE}</option>
            </select>

            <b>Correct Answer: {q_ansCorrect} </b>
          </div>
          
          <div
            style={{
              textAlign: "left",
              width: "510px",
              height: "150px",
              marginTop: "10px",
              border: "2px",
              borderStyle: "solid",
              borderColor: "grey",
              padding: "3px",
              flex: "row",
            }}
          >
             <div
              style={{
                width: "100%",
                backgroundColor: "#4AB8DF",
                textAlign: "center",
               
              }}
            >
              <b>Question Position</b>
            </div>
           <div><select
              style={{
                width: "150px",
                height: "25px",
                marginTop: "5px",
                marginBottom: "5px",
               
              }}
              onChange={(e) => {
                setPosDD(e.target.value);
              }}
            >
              <option
                value=""
                style={{
                  opacity: "0.65",
                }}
              >
               Question Position
              </option>
              <option value="Before">Before</option>
              <option value="After">After</option>
              <option value="Between">Between</option>
             
            </select>
            <select
        onChange={(e) => {
          setStepDD(e.target.value);
        }}
      >
        {stepList.map((data, index) => (
          <option key={index} value={data.step_text}>#{data.step_order} {data.step_text} </option>
        ))}
      </select>
   

  </div> 

           <div><b>Question Position:<br></br> {questPos}</b></div>
          </div> 
          <div
            style={{
              border: "2px",
              borderStyle: "solid",
              borderColor: "grey",
              padding: "10px",
              marginTop: "10px",
              width: "500px",
            }}
          >
            <b>Question Image Upload</b>
            <br></br>
            <input
              className="addElement"
              placeholder={image}
              type="text"
              onChange={(e) => {
                setQImg(e.target.value);
              }}
            />
            {/* Image Upload Section */}
            <div>
              <input
                type="file"
                name="file"
                placeholder="Upload an image"
                onChange={uploadImage}
              />
              {loading ? (
                <h3>Loading...</h3>
              ) : (
                <img src={image} style={{ width: "100px" }} alt={image} />
              )}
              <div>Image URL: {image}</div>
            </div>

            <div></div>
          </div>
          <button onClick={post_questions} style={{ margin: 15 }}>
            {" "}
            Save
          </button>
        </div>
        <br></br>
        {/* <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Quiz Questions</Modal.Title>
            </Modal.Header>
            <Modal.Body> <MissionQuestions  /> </Modal.Body>
            <Modal.Footer>
              <Button className="SubMenuBtn button" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal> */}
        <MissionQuestions />
      </div>
    </>
  );
}
