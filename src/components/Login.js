import React, { Component, useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";
import Policy from "./Policy"
import style from "./style.css"


export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState("");
  const onSubmit = event => {
    // don't refresh
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool
    });

    localStorage.setItem('email', JSON.stringify(email))
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password
    });

    user.authenticateUser(authDetails, {
      onSuccess: data => {
        console.log(data);
        setUser(email);
      },

      onFailure: err => {
        console.error("onFailure:", err);
        alert(err)
      },

      newPasswordRequired: data => {
        console.log("newPasswordRequired:", data);
      }
    });
  };
  
  return (

    
    <div className="login">
      {(user != "") ? (
        <div id='username'>
          <p>Hi,{user}</p>
          {Policy()}
        </div>
      ) : (
        <div>
        <h1>Login</h1>

        <form onSubmit={onSubmit}>
        <label>Email:</label>
        <input 
        type="text"
        value={email} 
        onChange={event => setEmail(event.target.value)} />
        <label >Passowrd:</label>
        <input
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <br></br>
        <button >Login</button>
      </form>
        </div>
      )}

    </div>
  );
};