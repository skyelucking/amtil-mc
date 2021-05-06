import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
import AdbIcon from '@material-ui/icons/Adb';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssistantIcon from '@material-ui/icons/Assistant';
import RadioIcon from '@material-ui/icons/Radio';
import BuildIcon from '@material-ui/icons/Build';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import PeopleIcon from '@material-ui/icons/People';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function Topbar() {
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
    <>
             <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "#4AB8DF", fontSize: "1.2em", color: "black", maxHeight: "45px", marginBottom: "5px"}} >
      
            
            <Navbar.Brand ><SentimentVerySatisfiedIcon style={{fontSize: "1em", padding: "0px", marginRight: "5px"}}/>Hello, {user && user.userfName} ! </Navbar.Brand>
      
              <NavDropdown title="Mission Menu" id="collasible-nav-dropdown">
                <NavDropdown.Item ><Link to="/basics"><AssistantIcon  style={{fontSize: "1.2em", padding: "0px", marginRight: "15px"}}/> 
            Create A Mission
          </Link></NavDropdown.Item>
                <NavDropdown.Item href="/viewmissions">
                <VisibilityIcon style={{fontSize: "1.2em", padding: "0px", marginRight: "15px"}} /> View Missions
                </NavDropdown.Item>
               
              </NavDropdown>
              <NavDropdown title="Elements Menu" id="collasible-nav-dropdown">
                <NavDropdown.Item ><Link to="/tooldetails"><BuildIcon  style={{fontSize: "1.2em", padding: "0px", marginRight: "15px"}}/>Tool Catalog</Link></NavDropdown.Item>
                <NavDropdown.Item href="/equipdetails">
                <RadioIcon style={{fontSize: "1.2em", padding: "0px", marginRight: "15px"}} />Equipment Catalog
                </NavDropdown.Item>
                <NavDropdown.Item href="/stagedetails">
                <WallpaperIcon style={{fontSize: "1.2em", padding: "0px", marginRight: "15px"}} />Stages
                </NavDropdown.Item>
                <NavDropdown.Item href="/teamdetails">
                <PeopleIcon style={{fontSize: "1.2em", padding: "0px", marginRight: "15px"}} />Team Members
                </NavDropdown.Item>
               
              </NavDropdown>
              <Navbar.Brand href="/teamdetails" style={{marginLeft: "50%"}}> <b><ExitToAppIcon  style={{fontSize: "1em"}}/> Logout</b> </Navbar.Brand>
            <Navbar.Brand href="/teamdetails"> <b><AdbIcon  style={{fontSize: "1em"}}/> Feedback</b> </Navbar.Brand>
            
            </Navbar>
          
          
   </>
  );
}
