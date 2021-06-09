import React, { Component, useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";
import { Redirect } from "react-router";



// export default class App extends Component{
//     constructor(props) {
//       super(props);
//     }

//     render(){
//       const [email, setEmail] = useState("");
//       const [password, setPassword] = useState("");


//       const [user, setUser] = useState("");
//       const onSubmit = event => {
//         // don't refresh
//         event.preventDefault();

//         const user = new CognitoUser({
//           Username: email,
//           Pool: UserPool
//         });


//         const authDetails = new AuthenticationDetails({
//           Username: email,
//           Password: password
//         });

//         user.authenticateUser(authDetails, {
//           onSuccess: data => {
//             console.log(data);
//             localStorage.setItem('email', email)
//             setUser(email);
//           },

//           onFailure: err => {
//             console.error("onFailure:", err);
//             alert(err)
//           },

//           newPasswordRequired: data => {
//             console.log("newPasswordRequired:", data);
//           }


//         });
//       };

//       return (

//         <div className="login">
//           {(localStorage.getItem('email') != null) ? (
//             <div>
//               <Redirect to="/"></Redirect>
//             </div>
//           ) : (
//             <div>
//               <h1>Login</h1>

//               <form onSubmit={onSubmit}>
//                 <label>Email:</label>
//                 <input
//                   type="text"
//                   value={email}
//                   onChange={event => setEmail(event.target.value)} />
//                 <label >Passowrd:</label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={event => setPassword(event.target.value)}
//                 />
//                 <br></br>
//                 <button >Login</button>
//               </form>
//             </div>
//           )}

//         </div>
//       );

//     }
// }
export default ({ logged ,loginchange }) => {
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


    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password
    });

    user.authenticateUser(authDetails, {
      onSuccess: data => {
        console.log(data);
        localStorage.setItem('email', email)
        loginchange()
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
    <div>
      {(logged) ? (<Redirect to={'/'} />) : (
        <div className="login">
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

        </div>)}

    </div>
  );
};