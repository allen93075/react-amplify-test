/* eslint-disable import/no-anonymous-default-export */
import React, { Component, useState } from "react";

export default () => {
    function submit(event) {
        event.preventDefault();
        var url = "https://9bbejw5w86.execute-api.us-east-1.amazonaws.com/test/test-policy"
        var customer_name = document.getElementById("customer_name").value
        var iam_user_name = document.getElementById("iam_user_name").value
        var customer_account_id = document.getElementById("customer_account_id").value
        var required_permission = document.getElementById("required_permission").value

        let email = localStorage.getItem('email');

        var request = {
            'email': email,
            'customer_name': customer_name,
            'iam_user_name': iam_user_name,
            'customer_account_id': customer_account_id,
            'required_permission': required_permission
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

    }

    return (
        <div className="container">
            <h1>Request Role for Customer</h1>
            <form onSubmit={submit}>
                <label className="tag">Customer Name:</label>
                <input className="attach" id="customer_name" placeholder="customer name"></input>
                <br></br>

                <label className="tag">IAM User Name:</label>
                <input className="attach" id="iam_user_name" placeholder="iam user name to grant permission"></input>
                <br></br>

                <label className="tag">Customer Account ID:</label>
                <input className="attach" id="customer_account_id" placeholder="customer aws account id"></input>
                <br></br>

                <div className="text">
                    <label className="tag">Required Permission:</label>
                    <select className="attach" id="required_permission">
                        <option value="ReadOnly">ReadOnly</option>
                        <option value="PowerUser">PowerUser</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>

                <br></br>
                <button>Submit</button>

            </form>

        </div>

    )



}