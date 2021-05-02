import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
import AdbIcon from '@material-ui/icons/Adb';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssistantIcon from '@material-ui/icons/Assistant';

export default function Navbar() {
  Axios.defaults.withCredentials = true;
  const [user, setUser] = useState({
    username: "",
    userid: "",
    userfName: "",
  });

  useEffect(() => {
    setUser(JSON.parse(window.sessionStorage.getItem("user")));
  }, []);
  // console.log(user);

  return (
    <div className="navbar-header">
      <Link to="/">
        <b style={{margin: "5px"}}>Hello, </b>
      </Link>{" "}
      {user && user.userfName} !   <SentimentVerySatisfiedIcon style={{fontSize: "1.2em", padding: "0px", margin: "0px"}}/>
      <Link to="/menu">
        {" "}
        ~ <b style={{marginLeft: "15px"}}>  Mission Menu: </b>{" "}
      </Link>
      <Link to="/basics"> <AssistantIcon  style={{fontSize: "1.2em"}}/> Create a Mission | </Link>
      <Link to="/viewmissions">  View Missions </Link>
             
      <Link to="/addelementsmenu">
        {" "}
<b>  Elements Menu: </b>{" "}
      </Link>
      <Link to="/tooldetails">Tool Catalog  | </Link>
      <Link to="/equipdetails">Equipment Catalog  | </Link>
      <Link to="/stagedetails">Stages  | </Link>
      <Link to="/teamdetails">Team Members</Link>

      <Link to="/viewedit" style={{marginLeft: "5%"}}> <b><ExitToAppIcon  style={{fontSize: "1.2em"}}/> Logout</b> </Link>
      <Link to="/viewedit"> <b><AdbIcon  style={{fontSize: "1.2em"}}/> Offer Feedback</b> </Link>
      
    </div>
  );
}
