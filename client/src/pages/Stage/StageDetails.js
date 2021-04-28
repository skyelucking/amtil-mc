import React, { useState } from "react";
import Axios from "axios";
import "../../App.css";
import StageCatalog from "./StageCatalog";


Axios.defaults.withCredentials = true;


export default function StageDetails() {

  // Start of Cloudinary Upload
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

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

  const [stage_name, setStageName] = useState("");
  const [stage_desc, setStageDesc] = useState("");
  const [stage_img, setStageImg] = useState("");
  

  const stage_details = () => {
    Axios.post("/stagedetails", {
      stage_name: stage_name,
      stage_desc: stage_desc,
      stage_img : image,
          }).then((response) => {
      console.log(response);
      
    });
  };

    return (
    <div className="container">
      <div className="inputBox" style={{marginBottom: "25px"}}>
        <h3>Add A New Stage/Setting</h3>
        
      
        <input
        className="addElement"
        placeholder="Stage Name"
          type="text"
          onChange={(e) => {
            setStageName(e.target.value);
          }}
        />
        
       
        <input
        className="addElement"
        placeholder="Stage Description"
          type="text"
          onChange={(e) => {
            setStageDesc(e.target.value);
          }}
        />
        <div
            style={{
              border: "2px",
              borderStyle: "solid",
              borderColor: "grey",
              padding: "15px",
            }}
          >
            <b>Stage Image Upload</b>
            <br></br>
            <input
              className="addElement"
              placeholder={image}
              type="text"
              onChange={(e) => {
                setStageImg(e.target.value);
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
          <button onClick={stage_details} style={{ margin: 15 }} alt={stage_desc}>
            {" "}
            Save
          </button>
        </div>
       
        <StageCatalog />
      
    </div>
  );
}
