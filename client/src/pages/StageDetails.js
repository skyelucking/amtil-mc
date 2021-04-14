import React, { useState } from "react";
import Axios from "axios";
import "../App.css";


Axios.defaults.withCredentials = true;


export default function StageDetails() {
  const [stage_name, setStageName] = useState("");
  const [stage_desc, setStageDesc] = useState("");
  const [stage_img, setStageImg] = useState("");
  



  const stage_details = () => {
    Axios.post("/stagedetails", {
      stage_name: stage_name,
      stage_desc: stage_desc,
      stage_img : stage_img,
      

    }).then((response) => {
      console.log(response);
      
    });
  };

    return (
    <div className="container">
      <div className="inputBox">
        <h1>Add Stage</h1>
        
        <label>Stage Name</label>
        <input
          type="text"
          onChange={(e) => {
            setStageName(e.target.value);
          }}
        />
        
        <label>Stage Description</label>
        <input
          type="text"
          onChange={(e) => {
            setStageDesc(e.target.value);
          }}
        />
        
        <label>Stage Image</label>
        <input
          type="text"
          onChange={(e) => {
            setStageImg(e.target.value);
          }}
        />
        
        <button onClick={stage_details} style={{margin: 15}}> Save</button>
      </div>
      
    </div>
  );
}
