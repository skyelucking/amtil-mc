import React, { useState } from "react";
import Axios from "axios";
import "../../App.css";
// import ToolCatalog from "./ToolCatalog";

Axios.defaults.withCredentials = true;

export default function EquipDetails() {
  
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
  const [equip_name, setEquipName] = useState("");
  const [equip_category, setEquipCategory] = useState("");
  const [equip_description, setEquipDesc] = useState("");
  const [equip_img, setEquipImg] = useState("");

  const equip_details = () => {
    Axios.post("/equipdetails", {
      equip_name: equip_name,
      equip_category: equip_category,
      equip_description: equip_description,
      equip_img: image,
    }).then((response) => {
      console.log(response);
    });
  };

    return (
    <>
      <div className="container">
        <div className="inputBox">
          <h3>Add New Equipment</h3>

          <input
            className="addElement"
            placeholder="Equipment Name"
            type="text"
            onChange={(e) => {
              setEquipName(e.target.value);
            }}
          />

          <select id="ToolCat" onChange={(e) => {
              setEquipCategory(e.target.value);
            }}>
            <option value="---">---</option>
            <option value="Threaded Fasteners">Threaded Fasteners</option>
            <option value="Bolts">Bolts</option>
                       <option value="Other">Other</option>
            
          </select>

          <textarea
            className="addElement"
            placeholder="Equipment Description"
            style={{ height: "150px", width: "300px" }}
            onChange={(e) => {
              setEquipDesc(e.target.value);
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
            <b>Equipment Image Upload</b>
            <br></br>
            <input
              className="addElement"
              placeholder={image}
              type="text"
              onChange={(e) => {
                setEquipImg(e.target.value);
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
          <button onClick={equip_details} style={{ margin: 15 }} alt={equip_description}>
            {" "}
            Save
          </button>
        </div>
        <br></br>
        {/* <ToolCatalog /> */}
      </div>
    </>
  );
}