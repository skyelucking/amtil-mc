import React, { useState } from "react";
import Axios from "axios";
import "../../App.css";
import Logo from  "../../Images/transp_amtilogo.png";
import NoImg from  "../../Images/NoImg.jpg";


export default function Login() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [userfName, setUserFname] = useState("");
  

  Axios.defaults.withCredentials = true;

  const login = () => {
    console.log("username:", username, "password:", password)
    Axios.post("/login", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response.data);
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data.username);
        setUserFname(response.data.fName);
        window.sessionStorage.setItem("user", JSON.stringify({
          username: response.data.username,
          userid: response.data.id,
          useremail: response.data.email,
          userfName: response.data.fName
        }));
        window.location.href="/menu"
        
      }
    });
  };

   
  return (

<div className="App">
 
      <div className="login">
        <img src={Logo} alt="amtil logo"></img>
        <p className="textBlock" style={{width: "50%", marginBottom: "10px"}}> Welcome! This website is still in its very early stages. If you are here to check it out - please know that it is not ready for feedback just yet. You will be notified when this is ready for beta testers and feedback! Thanks!</p>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}> Login </button>
      </div>
      <div><a href="/registration">Need to register?</a> </div>


<div>{loginStatus}</div>
         </div>
  );
}
