import { Card } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import swal from '@sweetalert/with-react';

function MissionQuestions({ }) {
  const [mission_id, setMissionID] = useState(JSON.parse(window.sessionStorage.getItem("mission")).mission_id);

  const [basicsList, setBasicsList] = useState([]);
  const [questionList, setQuestionList] = useState([]);
  var length = questionList.length;

 
  
  useEffect(() => {
    let missionVar = JSON.parse(window.sessionStorage.getItem("mission")).mission_id;
    console.log("missionVar", missionVar)
    Axios.get("/getquestions/" + missionVar).then((response) => {
      console.log(response.data);
      setQuestionList(response.data);
      
    });
  }, []);
  
  
  return (
  <div> {questionList.map((data, index) => (
      <div className="Panel" key={index}>
          <div className="panelHead">Question #{data.q_order} <button style={{justifyContent: "right", marginLeft: "75%", marginBottom: "2px", marginTop: "2px", fontSize: "90%"}}>Edit</button></div>
                 
         <div> <b>Question:</b> {data.q_text}<br></br>
         <b>Answers: </b>
         <ul style={{textAlign: "left"}}>
           <li>A. {data.q_ansA}</li>
           <li>B. {data.q_ansB}</li>
           <li>C. {data.q_ansC}</li>
           {data.q_ansD ? (<li>D. {data.q_ansD}</li>) : ("")}
           {data.q_ansE ? (<li>E. {data.q_ansE}</li>) : ("")}
           </ul><b>Correct Answer: {data.q_ansCorrect}</b></div>
           
         
      </div>

    ))}
</div>
  )
}

export default MissionQuestions;
