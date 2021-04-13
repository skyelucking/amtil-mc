import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";
import Logo from  "../Images/transp_amtilogo.png";


export default function Login() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  useEffect(() => {
    Axios.get("/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username)
        // window.location.href = "#/menu";
      }
    });
  }, []);

  
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

      <h1> {loginStatus}!</h1>
    </div>
  );
}
