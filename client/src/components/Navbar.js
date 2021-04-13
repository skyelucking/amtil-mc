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
     Username: {loginStatus}     | Built Pages:{" "}
      <Link to="/">Login </Link>and{" "}
      <Link to="#/registration">Registration</Link> | WIPS:{" "}
      <Link to="/basics">Mission Basics</Link>
    </div>
  );
}
