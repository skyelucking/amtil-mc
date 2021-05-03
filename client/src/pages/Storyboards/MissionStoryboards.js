import React, { useState, useEffect } from "react";
import Axios from "axios";


function MissionStoryboards({ }) {
  const mission_id = JSON.parse(window.sessionStorage.getItem("mission"))
    .mission_id;

  const [basicsList, setBasicsList] = useState([]);
  const [storyPanels, setStoryPanels] = useState([]);
  var length = storyPanels.length;

  useEffect(() => {
    Axios.get("/b_storyboards/" + mission_id).then((response) => {
      console.log(response.data);
      setStoryPanels(response.data);
      
    });
  }, []);
  
  
  return (
  <div> {storyPanels.map((data, index) => (
      <div className="Panel" key={data.storyboard_id}>
          <div className="panelHead">Panel #{data.panel_order} <button style={{justifyContent: "right", marginLeft: "75%", marginBottom: "2px", marginTop: "2px", fontSize: "90%"}}>Edit</button></div>
         <div>{data.panel_img ? (<a href={data.panel_img} targer="_blank"> <img src={data.panel_img} className="panelImg"></img></a>) :(<div><img src="https://res.cloudinary.com/amtil/image/upload/v1620072960/zwsh3nlk6ylrejbj6srj.jpg" className="panelImg" style={{width: "100%", margins: "auto", display: "flex", justifyContent: "center"}}></img> </div> )}</div>
         
         <div className="panelText"> <b>Content Notes:</b> {data.panel_notes}<hr></hr>
         <b>Style Notes: </b>{data.panel_color_and_style}  </div>
         
      </div>

    ))}
      

  </div>
  )
}

export default MissionStoryboards;
