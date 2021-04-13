import React, { useEffect, useState }  from "react";
import Axios from "axios";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'


export default function Menu() {

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

<div className="Menu" style={{justifyContent: "center", width: "100%"}}>
    <div className="navbar-header"> Hi, {loginStatus}!</div>
    <div className="container menuBox">
        <button className="MenuBtn">View Missions</button><br></br>
        <Link to="/basics"><button className="MenuBtn">Create Missions</button></Link><br></br>
        <button className="MenuBtn">Add Elements</button><br></br>
        <button className="MenuBtn">Give Feedback</button><br></br>
        </div>

           
    </div>
  );
}