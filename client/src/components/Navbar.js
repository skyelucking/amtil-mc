import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  Axios.defaults.withCredentials = true;
  const [user, setUser] = useState({
    username: "",
    userid: "",
  });

  useEffect(() => {
    setUser(JSON.parse(window.sessionStorage.getItem("user")));
  }, []);
  // console.log(user);

  return (
    <div className="navbar-header">
      <Link to="/">
        <b>Login: </b>
      </Link>{" "}
      {user && user.username}
      <Link to="/menu">
        {" "}
        |<b>  Main Menu: </b>{" "}
      </Link>
      <Link to="/alltables">  All Tables | </Link>

      <Link to="/viewedit">  ViewEditMission | </Link>
    </div>
  );
}
