import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { event } from 'jquery';
import React, { Component, useState } from 'react';
import UserPool from '../UserPool';
import Login from './Login'
import style from "./style.css"

// class Policy extends React.Component {
//     render() {
//         return
//         <div>        
//         <h1>Hello</h1>
//         <textarea></textarea>
//         </div>
//     }

// };


export default () => {
  var url = "https://9bbejw5w86.execute-api.us-east-1.amazonaws.com/test/test-policy"
  var data = { "test": "test" }

  function submit_policy(event) {
    event.preventDefault();
    console.log(document.getElementById("policy").value)
  }

  function policy_approval(event) {
    event.preventDefault();
    // var response;
    var policy = document.getElementById("policy").value
    var role = document.getElementById("role").value
    let email = JSON.parse(localStorage.getItem('email'));
    console.log(email)
    let body = {
      'rolename': role,
      'policyname': policy
    }

    var request = {
      'email': email,
      'policy': JSON.stringify(body),
      'request': '1'
    }
    fetch(url, {
      body: JSON.stringify(request),
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      method: 'POST',
      // why ????



    }).then((response) => response.json()
    ).then(body => {
      console.log(body)
    }).then(a => {
      alert("request has been send.")
    })

  }

  return (
    <div className="container">
      <div className="right-form">
        <p>If Approval, your policy will attach to your role</p>
        <form onSubmit={submit_policy, policy_approval}>
          <label className="tag">Your Rolename:</label>
          <input className="attach" id="role" placeholder="enter your rolename"></input>
          <br></br>
          <br></br>
          <label className="tag">Your Policyname:</label>
          <input className="attach" id="policy" placeholder="enter your policy"></input>
          <br></br>
          <input type="submit"></input>
        </form>
        <p>Example: </p>
        <p>rolename:Cloud9-SDK-Test</p>
        <p>policyname:AmazonEC2ContainerRegistryReadOnly</p>
      </div>

      <div className="left-form">
        <h1>Create Policy</h1>
      </div>

    </div>


  )
}