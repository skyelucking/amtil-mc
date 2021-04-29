import React, { useState } from "react";
import Axios from "axios";
import "../../App.css";
import ShowTeam from "./ShowTeam";


Axios.defaults.withCredentials = true;

export default function TeamDetails() {
  
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitleName] = useState("");
  const [department, setDepartment] = useState("");
  const [avatar, setAvatar] = useState("");

  const team_details = () => {
    console.log("department:", department);
    console.log("avatar:", avatar);
    Axios.post("/teamdetails", {
      firstName: firstName,
      lastName: lastName,
      title: title,
      department: department,
      avatar: image,
    }).then((response) => {
      console.log(response);
    });
  };

    return (
    <>
      <div className="container">
        <div className="inputBox">
          <h3>Add A New Team</h3>

          <input
            className="addElement"
            placeholder="First Name"
            type="text"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            className="addElement"
            placeholder="Last Name"
            type="text"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <input
            className="addElement"
            placeholder="Title"
            type="text"
            onChange={(e) => {
              setTitleName(e.target.value);
            }}
          />

          <select id="department" onChange={(e) => {
            setDepartment(e.target.value);
            }}>
            <option value="---">---</option>
            <option value="Engineering">Engineering</option>
            <option value="Operations">Operations</option>
            <option value="Education">Education</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="Advisory">Advisory</option>
            <option value="Legal">Legal</option>
            <option value="Media">Media</option>
            <option value="Other">Other</option>
           
            
          </select>

                    <div
            style={{
              border: "2px",
              borderStyle: "solid",
              borderColor: "grey",
              padding: "15px",
            }}
          >
            <b>Avatar Upload</b>
            <br></br>
            <input
              className="addElement"
              placeholder={image}
              type="text"
              onChange={(e) => {
                setAvatar(e.target.value);
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
          <button onClick={team_details} style={{ margin: 15 }} alt={lastName}>
            {" "}
            Save
          </button>
        </div>
        <br></br>
        <ShowTeam/>
      </div>
    </>
  );
}
