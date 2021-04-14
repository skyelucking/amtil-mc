import React, { useState } from "react";
import Axios from "axios";
import "../App.css";
import DatePicker from 'react-date-picker';
import ShowBasics from "../pages/ShowBasics";

Axios.defaults.withCredentials = true;


export default function Basics() {
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [summary, setSummary] = useState("");
  const [notes, setNotes] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [cover_img, setCoverImg] = useState("");
  const [description, setdescription] = useState("");

    const mission_basics = () => {
    Axios.post("/basics", {
      status: status,
      name: name,
      category: category,
      summary: summary,
      notes: notes,
      start_date: start_date,
      end_date : end_date,
      cover_img : cover_img,
      description :description,

    }).then((response) => {
      console.log(response);
      console.log(response.name);
    });
  };

    return (
    <div className="container">
      <div className="inputBox">
        <h1>Mission Basics</h1>
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>status</label>
        <input
          type="text"
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        />
        <label>category</label>
        <input
          type="text"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <label>summary</label>
        <input
          type="text"
          onChange={(e) => {
            setSummary(e.target.value);
          }}
        />
        <label>notes</label>
        <input
          type="text"
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        />
        <label>start_date</label>
        <DatePicker
          onChange={ (date) => {
            setStartDate(date)
          }}
          value={start_date}
         
        />
         <label>end_date</label>
         <DatePicker
          onChange={ (date) => {
            setEndDate(date)
          }}
          value={end_date}
        />
        <label>cover_img</label>
        <input
          type="text"
          onChange={(e) => {
            setCoverImg(e.target.value);
          }}
        />
        <label>description</label>
        <input
          type="text"
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
        <button onClick={mission_basics}> Save</button>
      </div>
      <hr></hr>
      <div><ShowBasics /> </div>
      
    </div>
  );
}
