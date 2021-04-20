import React, {useEffect, useState} from "react";
import Axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";


 export default function Navbar() {
   
  Axios.defaults.withCredentials = true;
const [user, setUser] = useState({
  username: "",
  userid: ""
})

useEffect(() => {
setUser(JSON.parse(window.sessionStorage.getItem("user")))
}, [])
  console.log(user);

  return (
    <div className="navbar-header">
      <b>Username: {user && user.username}   </b>
      <Link to="/menu">|  Main Menu </Link> |{" "}
      <b>Add Data:</b> <Link to="/">Login </Link>|{" "}
      {/* <Link to="/registration">Registration |</Link>{" "}
      <Link to="/equipdetails">Equipment Details | </Link> */}
      <Link to="/tooldetails">Add New Tool  | </Link>
      
      {/* <Link to="/stagedetails">Stage Details </Link>|{" "} */}
      <Link to="/createmission">Create Mission </Link>|{" "}
      {/* <Link to="/basics">Mission Basics | </Link> */}
      <b>Display Data:</b>{" "}
      <Link to="/alltables"> All Tables |  </Link> 

    
    </div>
  );
}
