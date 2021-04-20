import React from "react";
import Axios from "axios";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Menu() {
  // const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  return (
    <div className="Menu" style={{ justifyContent: "center", width: "100%" }}>
      {/* <div>Hi - {loginStatus}!</div> */}
      <div className="container menuBox">
        <Link to="/basics">
          <button className="MainMenuBtn">Create A Mission</button>
        </Link>
        <br></br>
        <Link to="/basics">
          <button className="MainMenuBtn">View Missions</button>
        </Link>
        <br></br>

        <Link to="/addelementsmenu">
          {" "}
          <button className="MainMenuBtn">Add Mission Elements</button>
        </Link>
        <br></br>
        <Link to="/basics">
          <button className="MainMenuBtn">Give Feedback</button>
        </Link>
        <br></br>
      </div>
    </div>
  );
}
