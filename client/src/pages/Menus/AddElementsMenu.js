import React from "react";
import Axios from "axios";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Logo from "../../Images/transp_amtilogo.png";

export default function AddElementsMenu() {
  // const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  return (
    <div className="Menu" style={{ justifyContent: "center", width: "100%" }}>
      {/* <div>Hi - {loginStatus}!</div> */}
      <div className="container menuBox">
      <img
        src={Logo}
        alt="amtil logo"
        style={{
          width: "20%",
          display: "flex",
          marginLeft: "35%",
          marginRight: "35%",
          justifyContent: "center",
          textAlign: "center",
        }}
      ></img>
        <Link to="/tooldetails">
          <button className="MainMenuBtn">Tool Catalog</button>
        </Link>
        <br></br>
        <Link to="/equipdetails">
          <button className="MainMenuBtn">Equipment Catalog</button>
        </Link>
        <br></br>
        <Link to="/stagedetails">
          <button className="MainMenuBtn">Stages</button>
        </Link>
        <br></br>
        <Link to="/menu">
          <button className="MainMenuBtn">Team Members</button>
        </Link>
        <br></br>
       

        {/* <Link to="/addelements">
          {" "}
          <button className="MainMenuBtn">Team Members</button>
        </Link>
        <br></br>
        <Link to="/basics">
          <button className="MainMenuBtn">Stage/Settings</button>
        </Link> */}
        <br></br>
      </div>
    </div>
  );
}
