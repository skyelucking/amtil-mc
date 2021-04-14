import React, { useState } from "react";
import Axios from "axios";
import "../App.css";


Axios.defaults.withCredentials = true;


export default function EquipDetails() {
  const [equip_name, setEquipName] = useState("");
  const [equip_category, setEquipCategory] = useState("");
  const [equip_description, setEquipDesc] = useState("");
  const [equip_img, setEquipImg] = useState("");
  



  const equip_details = () => {
    Axios.post("/equipdetails", {
      equip_name: equip_name,
      equip_category: equip_category,
      equip_description: equip_description,
      equip_img : equip_img,
      

    }).then((response) => {
      console.log(response);
      
    });
  };

    return (
    <div className="container">
      <div className="inputBox">
        <h1>Add Equipment</h1>
        
        <label>Equipment Name</label>
        <input
          type="text"
          onChange={(e) => {
            setEquipName(e.target.value);
          }}
        />
        
        <label>Equipment Category</label>
        <input
          type="text"
          onChange={(e) => {
            setEquipCategory(e.target.value);
          }}
        />
        <label>Equipment Description</label>
        <input
          type="text"
          onChange={(e) => {
            setEquipDesc(e.target.value);
          }}
        />
        
        <label>Equipment Image</label>
        <input
          type="text"
          onChange={(e) => {
            setEquipImg(e.target.value);
          }}
        />
        
        <button onClick={equip_details} style={{margin: 15}}> Save</button>
      </div>
      
    </div>
  );
}
