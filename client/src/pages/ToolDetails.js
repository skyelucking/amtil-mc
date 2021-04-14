import React, { useState } from "react";
import Axios from "axios";
import "../App.css";


Axios.defaults.withCredentials = true;


export default function ToolDetails() {
  const [tool_name, setToolName] = useState("");
  const [tool_category, setToolCategory] = useState("");
  const [tool_description, setToolDesc] = useState("");
  const [tool_img, setToolImg] = useState("");
  



  const tool_details = () => {
    Axios.post("/tooldetails", {
      tool_name: tool_name,
      tool_category: tool_category,
      tool_description: tool_description,
      tool_img : tool_img,
      

    }).then((response) => {
      console.log(response);
      
    });
  };

    return (
    <div className="container">
      <div className="inputBox">
        <h1>Add Tool</h1>
        
        <label>Tool Name</label>
        <input
          type="text"
          onChange={(e) => {
            setToolName(e.target.value);
          }}
        />
        
        <label>Tool Category</label>
        <input
          type="text"
          onChange={(e) => {
            setToolCategory(e.target.value);
          }}
        />
        <label>Tool Description</label>
        <input
          type="text"
          onChange={(e) => {
            setToolDesc(e.target.value);
          }}
        />
        
        <label>Equipment Image</label>
        <input
          type="text"
          onChange={(e) => {
            setToolImg(e.target.value);
          }}
        />
        
        <button onClick={tool_details} style={{margin: 15}}> Save</button>
      </div>
      
    </div>
  );
}
