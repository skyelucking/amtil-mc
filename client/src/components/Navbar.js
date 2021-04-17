import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [loginStatus, setLoginStatus] = useState("");
  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  return (
    <div className="navbar-header">
      <b>Username:</b> {loginStatus} |<Link to="/menu"> Main Menu </Link> |{" "}
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
