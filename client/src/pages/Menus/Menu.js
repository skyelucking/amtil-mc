import React from "react";
import Axios from "axios";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Logo from "../../Images/transp_amtilogo.png";


export default function Menu() {
  // const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  return (
    <>
      <div
        className="Menu"
        style={{
          justifyContent: "center",
          width: "100%",
          display: "flex",
          margins: "auto",
          textAlign: "center",
        }}
      >
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
          <Link to="/basics">
            <button className="MainMenuBtn"> Create A Mission</button>
          </Link>
         

          <br></br>
          <Link to="/viewmissions">
            <button className="MainMenuBtn">View Missions</button>
          </Link>
          <br></br>

          <Link to="/addelementsmenu">
            {" "}
            <button className="MainMenuBtn">Add Mission Elements</button>
          </Link>
          <br></br>
          <Link to="/ticketcreate">
            <button className="MainMenuBtn">Give Feedback</button>
          </Link>
          <br></br>
        </div>
      </div>
    </>
  );
}
