import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../App.css";
import swal from '@sweetalert/with-react';
import MissionSteps from "./MissionSteps"


Axios.defaults.withCredentials = true;

export default function StepDetails() {
  const [mission_id, setMissionID] = useState(
    JSON.parse(window.sessionStorage.getItem("mission")).mission_id
  );
  // Start of Cloudinary Upload
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [stepList, setStepList] = useState([]);

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
  const [step_order, setStepOrder] = useState("");
  const [step_text, setStepText] = useState("");
 
  const [step_img, setStepImg] = useState("");

  const poststeps= () => {
    console.log("mission_id", mission_id)
    Axios.post("/poststeps", {
      step_order: step_order,
      step_text: step_text,
      step_img: image,
      mission_id: mission_id,
    }).then((response) => {
      console.log(response);
      swal("Step", "Added!", "success");
    });
  };

  useEffect(() => {
    Axios.get("/getsteps/" + mission_id).then((response) => {
      console.log(response.data);
      setStepList(response.data);
      
    });
  }, []);

  var stepNum = stepList.length;

  return (
    <>
      <div className="container">
        <h3 className="PageHead" style={{width: "12em"}}>Procedural Steps</h3>
        <div className="inputBox" style={{width: "50em"}}>

         <div> <input
            className="addElement"
            placeholder="Step#"
            type="number"
            style={{ width: "75px" }}
            onChange={(e) => {
              setStepOrder(e.target.value);
            }}
          /> of {stepNum} Steps </div>

          <textarea
            className="addElement"
            placeholder="Step Notes"
            style={{ height: "75px", width: "300px" }}
            onChange={(e) => {
              setStepText(e.target.value);
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
            <b>Step Image Upload</b>
            <br></br>
            <input
              className="addElement"
              placeholder={image}
              type="text"
              onChange={(e) => {
                setStepImg(e.target.value);
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
          
          <button
            onClick={poststeps}
            style={{ margin: 15 }}
            >
            {" "}
            Save
          </button>
        </div>
        <br></br>
        
      </div>
    </>
  );
}
