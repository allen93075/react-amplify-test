import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Nav from "./Nav"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

export default () => {
  return (
    
    <Router>
    <div className="App">
      <Nav />
      <Route path='/' exact component={Home} />
      <Route path='/Signup' component={Signup} />
      <Route path='/Login' component={Login} />
    </div>
    </Router>
    
  );
};

const Home = () => (
  <div>
    <h1>home page</h1>
  </div>

)