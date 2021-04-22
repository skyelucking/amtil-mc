import React, { useState } from "react";
import Axios from "axios";
import "../../App.css";
import DatePicker from "react-date-picker";

Axios.defaults.withCredentials = true;

export default function Basics() {
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
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [summary, setSummary] = useState("");
  const [notes, setNotes] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [cover_img, setCoverImg] = useState("");
  const [description, setdescription] = useState("");
  const [mission_id, setMissionId] = useState("");

  const mission_basics = () => {
    Axios.post("/basics", {
      status: status,
      name: name,
      category: category,
      summary: summary,
      notes: notes,
      start_date: start_date,
      end_date: end_date,
      cover_img: image,
      description: description,
    }).then((response) => {
      if (response.data.message) {
        setMissionId(response.data.message);
      } else {
        setMissionId(response.data.mission_id);
        window.sessionStorage.setItem(
          "mission",
          JSON.stringify({
            mission_id: response.data.mission_id,
            name: response.data.name,
          })
        );
    window.location.href="/createmission"
      }
    });

 
  };
  return (
    <div className="container">
      <h3 className="PageHead">Mission Basics</h3>
      <div className="inputBox">
        <input
          placeholder="Name"
          type="text"
          style={{ margin: 5 }}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div>
          {" "}
          <label style={{ marginRight: "5px" }}>Start Date:{"     "} </label>
          <DatePicker
            onChange={(date) => {
              setStartDate(date);
            }}
            value={start_date}
          />
          {"       "}
          <label style={{ marginRight: "5px", marginLeft: "10px" }}>
            {" "}
            End Date: {"     "}
          </label>
          <DatePicker
            onChange={(date) => {
              setEndDate(date);
            }}
            value={end_date}
          />
        </div>

        <select
          id="Status"
          onChange={(e) => { setStatus(e.target.value);
          }}>
        
          <option value="Brainstorming">Brainstorming</option>
          <option value="Planning">Planning</option>
          <option value="Development">Development</option>
          <option value="Review">Review</option>
          <option value="Revision">Revision</option>
          <option value="Testing">Testing</option>
          <option value="Production">Production</option>
          <option value="Completed">Completed</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Upgrading">Upgrading</option>
          <option value="Other">Other</option>
        </select>

               <input
          placeholder="Category"
          style={{ margin: 5 }}
          type="text"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <textarea
          placeholder="Short Description"
          style={{ height: "150px", width: "300px", padding: "5px" }}
          type="text"
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
        {/* <label>summary</label> */}
        <textarea
          placeholder="Summary"
          style={{
            height: "150px",
            width: "300px",
            padding: "5px",
            margin: "5px",
          }}
          onChange={(e) => {
            setSummary(e.target.value);
          }}
        />
        {/* <label>notes</label> */}
        <input
          placeholder="Notes"
          style={{ margin: 5 }}
          type="text"
          onChange={(e) => {
            setNotes(e.target.value);
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
          <b>Mission Cover Image </b>
          <br></br>
          <input
            placeholder={image}
            style={{ margin: 5 }}
            type="text"
            onChange={(e) => {
              setCoverImg(e.target.value);
            }}
          />

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
            {/* <div>Image URL: {image}</div> */}
          </div>
        </div>

        <button onClick={mission_basics}> Save</button>
      </div>
    </div>
  );
}
