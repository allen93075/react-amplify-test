import React, { useState } from 'react';
import UserPool from '../UserPool';
import style from "./style.css"

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
        alert(err)
      }
      console.log(data);
    });
  };

  return (
    <div>

      <h1>Sign up</h1>
      <form onSubmit={onSubmit}>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <br></br>
        <p>Password need to combine with:</p>
        <p>1 uppercase, 1 special characters, at least 8</p>
        <button type='submit'>Signup</button>
      </form>

    </div>
  );
};