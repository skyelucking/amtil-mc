import React, { useState } from "react";
import Axios from "axios";
import "../App.css";


Axios.defaults.withCredentials = true;



export default function ToolDetails() {
  const [hello, setHello] = useState("");
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
    setHello(file.secure_url);
    return(file.secure_url)
    
  };

  //End of Cloudinary Upload//
  const [tool_name, setToolName] = useState("");
  const [tool_category, setToolCategory] = useState("");
  const [tool_description, setToolDesc] = useState("");
  const [tool_img, setToolImg] = useState("");

  const tool_details = () => {
    
    Axios.post("/tooldetails", {
      tool_name: tool_name,
      tool_category: tool_category,
      tool_description: tool_description,
      tool_img: tool_img,
    }).then((response) => {
      console.log(response);
      
    });
  };

  const sayHello = ()=>{
    setToolImg(image);
    console.log("hello", tool_img)
  }


  return (
    <>
      <div className="container">
        <div className="inputBox">
          <h3>Add A New Tool</h3>

          <input
            className="addElement"
            placeholder="Tool Name"
            type="text"
            onChange={(e) => {
              setToolName(e.target.value);
            }}
          />

          <input
            className="addElement"
            placeholder="Tool Category"
            type="text"
            onChange={(e) => {
              setToolCategory(e.target.value);
            }}
          />

          <input
            className="addElement"
            placeholder="Tool Description"
            type="text"
            onChange={(e) => {
              setToolDesc(e.target.value);
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
            <b>Tool Image Upload</b>
            <br></br>
            <input
              className="addElement"
              placeholder={image}
              type="text"
              onChange={(e) => {
                setToolImg({ image });
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
                
                <img src={image} style={{ width: "150px" }} />
              )}
              <div>Image URL: {image}</div>
            </div>

            <div></div>
          </div>
          <button onClick={tool_details} style={{ margin: 15 }}>
            {" "}
            Save
          </button>
        </div>
      </div>
    </>
  );
}
