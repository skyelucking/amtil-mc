import React, { useState } from "react";
import Axios from "axios";
import "../../App.css";
import Logo from  "../../Images/transp_amtilogo.png";


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

         </div>
  );
}
