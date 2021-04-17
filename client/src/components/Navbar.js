import React from "react";
import Axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  
  Axios.defaults.withCredentials = true;

  
  return (
    <div className="navbar-header">
      <Link to="/menu"> Main Menu </Link> |{" "}
      <b>Add Data:</b> <Link to="/">Login </Link>|{" "}
      <Link to="/registration">Registration |</Link>{" "}
      <Link to="/equipdetails">Equipment Details | </Link>
      <Link to="/tooldetails">Tool Details | </Link>
      <Link to="/stagedetails">Stage Details </Link>|{" "}
      <Link to="/createmission">Create Mission </Link>|{" "}
      <Link to="/basics">Mission Basics | </Link>
      <b>Display Data:</b>{" "}
      <Link to="/alltables"> All Tables | </Link>
    </div>
  );
}
