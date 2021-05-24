import React, { useState } from "react";
import Axios from "axios";
import "../../App.css";
import DatePicker from "react-date-picker";
import swal from '@sweetalert/with-react';

Axios.defaults.withCredentials = true;

export default function Tickets() {
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
  const [ticket_by, setTicketBy] = useState("");
  const [ticket_title, setTicketTitle] = useState("");
  const [ticket_desc, setTicketDesc] = useState("");
  const [ticket_category, setTicketCategory] = useState("");
  const [ticket_img, setTicketImg] = useState("");
  const [ticket_status, setTicketStatus] = useState("");
  const [ticket_startdate, setStartDate] = useState("");
  const [ticket_enddate, setEndDate] = useState("");
  const [ticket_assigned, setSummary] = useState("");
  
  
  
  
  const [mission_id, setMissionId] = useState("");

  const ticket_log = () => {
    Axios.post("/ticketcreate", {
      ticket_status: ticket_status,
      ticket_title: ticket_title,
      ticket_by: ticket_by,
      ticket_category: ticket_category,
      ticket_assigned: ticket_assigned,
      ticket_startdate: ticket_startdate,
      ticket_enddate: ticket_enddate,
      ticket_img: image,
      ticket_desc: ticket_desc,
    }).then((response) => {
      if (response) {
        console.log(response);
        swal(response.data.ticket_title, 'submitted!', "info");
        setTimeout(function(){window.location.href="/ticketcreate"} , 5000)
        // window.location.href="/ticketcreate"
      } 
      // else {
      //   swal(response.data.ticket_title, "could not be submitted!", "info");
      //    }
    }).catch((err) => {
      alert("There was a problem.");
    });;

 
  };
  return (
    <div className="container">
      <h3 className="PageHead">Submit a Ticket</h3>
      <div className="inputBox">
        <input
          placeholder="Title of Ticket"
          type="text"
          style={{ margin: 5 }}
          onChange={(e) => {
            setTicketTitle(e.target.value);
          }}
        />
        <input
          placeholder="Ticket Submitted by: 'Your Name'"
          type="text"
          style={{ margin: 5 }}
          onChange={(e) => {
            setTicketBy(e.target.value);
          }}
        />
        <div>
          {" "}
          <label style={{ marginRight: "5px" }}>Submit Date:{"     "} </label>
          <DatePicker
            onChange={(date) => {
              setStartDate(date);
            }}
            value={ticket_startdate}
          />
          {"       "}
          <label style={{ marginRight: "5px", marginLeft: "10px" }}>
            {" "}
            Resolve Date: {"     "}
          </label>
          <DatePicker
            onChange={(date) => {
              setEndDate(date);
            }}
            value={ticket_enddate}
          />
        </div>
        <div>
<label style={{ marginRight: "5px", marginLeft: "10px" }}><b>Status: </b></label> 
        <select
          id="Status"
          onChange={(e) => { setTicketStatus(e.target.value);
          }}>
        <option value="---">---</option>
          <option value="Submitted">Submitted</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
          <option value="Re-Opened">Re-Opened</option>
          <option value="Other">Other</option>
        </select>

<label style={{ marginRight: "5px", marginLeft: "10px" }}><b>Category: </b></label> 
        <select
          id="Category"
          onChange={(e) => { setTicketCategory(e.target.value);
          }}>
        <option value="---">---</option>
          <option value="Bug or Error">Bug or Error</option>
          <option value="Feature Request">Feature Request</option>
          <option value="Incorrect Data">Incorrect Data</option>
          <option value="Looks Weird">Looks Weird</option>
          <option value="Login/Password">Login/Password</option>
          <option value="Other">Other</option>
        </select>
</div>

               {/* <input
          placeholder="Category"
          style={{ margin: 5 }}
          type="text"
          onChange={(e) => {
            setTicketCategory(e.target.value);
          }}
        /> */}
        <textarea
          placeholder="Short Description"
          style={{ height: "150px", width: "300px", padding: "5px", marginBottom: "10px" }}
          type="text"
          onChange={(e) => {
            setTicketDesc(e.target.value);
          }}
        />
        
        <div
          style={{
            border: "2px",
            borderStyle: "solid",
            borderColor: "grey",
            padding: "15px",
            marginBottom: "5px"
          }}
        >
          <b>Screen Shot Upload </b>
          <br></br>
          <input
            placeholder={image}
            style={{ margin: 5 }}
            type="text"
            onChange={(e) => {
              setTicketImg(e.target.value);
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

        <button onClick={ticket_log}> Submit</button>
      </div>
    </div>
  );
}
