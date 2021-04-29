import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../App.css";
import MissionStoryboards from "./MissionStoryboards";

Axios.defaults.withCredentials = true;

export default function StoryDetails() {
  const [mission_id, setMissionID] = useState(
    JSON.parse(window.sessionStorage.getItem("mission")).mission_id
  );
  // Start of Cloudinary Upload
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [storyPanels, setStoryPanels] = useState([]);

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
  const [panel_order, setPanelOrder] = useState("");
  const [panel_notes, setPanelNotes] = useState("");
  const [color_and_style, setColorandStyle] = useState("");
  const [panel_img, setPanelImg] = useState("");

  const post_storyboards = () => {
    Axios.post("/poststoryboards", {
      panel_order: panel_order,
      panel_notes: panel_notes,
      color_and_style: color_and_style,
      panel_img: image,
      mission_id: mission_id,
    }).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    Axios.get("/b_storyboards/" + mission_id).then((response) => {
      console.log(response.data);
      setStoryPanels(response.data);
      
    });
  }, []);

  var panelNum = storyPanels.length;

  return (
    <>
      <div className="container">
        <h3 className="PageHead" style={{width: "12em"}}>Storyboards</h3>
        <div className="inputBox" style={{width: "50em"}}>
          
          <div
            style={{
              border: "2px",
              borderStyle: "solid",
              borderColor: "grey",
              padding: "15px",
            }}
          >
            <b>Panel Image Upload</b>
            <br></br>
            <input
              className="addElement"
              placeholder={image}
              type="text"
              onChange={(e) => {
                setPanelImg(e.target.value);
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
                <img src={image} style={{ width: "150px" }} alt={image} />
              )}
              <div>Image URL: {image}</div>
            </div>

            <div></div>
          </div>
         <div> <input
            className="addElement"
            placeholder="Panel#"
            type="number"
            style={{ width: "75px" }}
            onChange={(e) => {
              setPanelOrder(e.target.value);
            }}
          /> of {panelNum} Panels </div>

          <textarea
            className="addElement"
            placeholder="Panel Notes"
            style={{ height: "75px", width: "300px" }}
            onChange={(e) => {
              setPanelNotes(e.target.value);
            }}
          />
          <textarea
            className="addElement"
            placeholder="Style and Color Notes"
            style={{ height: "75px", width: "300px" }}
            onChange={(e) => {
              setColorandStyle(e.target.value);
            }}
          />

          <button
            onClick={post_storyboards}
            style={{ margin: 15 }}
            alt={color_and_style}
          >
            {" "}
            Save
          </button>
        </div>
        <br></br>
        <MissionStoryboards />
      </div>
    </>
  );
}
