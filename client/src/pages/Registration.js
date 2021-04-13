import React, { useState } from "react";
import Axios from "axios";
import "../App.css";

export default function Registration() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [fNameReg, setfNameReg] = useState("");
  const [lNameReg, setlNameReg] = useState("");
  const [titleReg, setlTitleReg] = useState("");

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("/register", {
      username: usernameReg,
      password: passwordReg,
      fName: fNameReg,
      lName: lNameReg,
      title: titleReg,
      email: emailReg,

    }).then((response) => {
      console.log(response);
    });
  };

  
  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>Email</label>
        <input
          type="text"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        <label>First Name</label>
        <input
          type="text"
          onChange={(e) => {
            setfNameReg(e.target.value);
          }}
        />
        <label>Last Name</label>
        <input
          type="text"
          onChange={(e) => {
            setlNameReg(e.target.value);
          }}
        />
        <label>Title</label>
        <input
          type="text"
          onChange={(e) => {
            setlTitleReg(e.target.value);
          }}
        />
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick={register}> Register </button>
      </div>
<div> Already Registered? <a href="/">Login here.</a></div>


      
    </div>
  );
}
