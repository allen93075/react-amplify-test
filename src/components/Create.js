import React, { Component, useState } from "react";

export default () => {
    function IsJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    function submit(event) {
        event.preventDefault();
        var url = "https://9bbejw5w86.execute-api.us-east-1.amazonaws.com/test/test-policy"
        var policy = document.getElementById("policy").value
        var name = document.getElementById("name").value
        var description = document.getElementById("description").value
        let email = localStorage.getItem('email');

        if(IsJsonString(policy)){
                  var request = {
            'email': email,
            'policy': JSON.stringify(policy),
            'name': name,
            'description': description,
            'create': '1'
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
        }).then(() => {
            alert("create request has been send.")
        })

        } else {
            alert("Your Json is unvalid")
        }



    }

    return (
        <div className="container">
            <h1>Create Policy</h1>
            <form onSubmit={submit}>
                <label className="tag">Name:</label>
                <input className="attach" id="name" placeholder="enter name"></input>
                <br></br>
                <label className="tag">Description:</label>
                <input className="attach" id="description" placeholder="enter description"></input>
                <br></br>
                <div className="text">
                    <label className="tag">Policy:</label>
                    <textarea className="attach" id="policy" placeholder="Policy(JSON)" rows="4" cols="50"></textarea>
                </div>
                <br></br>
                <button>Submit</button>

            </form>

        </div>

    )



}