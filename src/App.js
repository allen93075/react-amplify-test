import React, { Component, useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Create from "./components/Create"
import Attach from "./components/Attach"
import Home from "./components/Home"
import Check from "./Nav"
import Requestrole from "./components/Requestrole"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';





export default class App extends Component {
  constructor() {
    super();
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleLogoutChange = this.handleLogoutChange.bind(this);
    this.state = { logged: false };
  }

  handleLoginChange() {
    this.setState({ logged: true })
  }

  handleLogoutChange() {
    this.setState({ logged: false })
  }

  componentDidMount() {

    if (localStorage.getItem('email') != null) {
      this.handleLoginChange()
    }

    if (localStorage.getItem('email') == null) {
      this.handleLogoutChange()
    }
    
  }


  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <div>
              <Check logged={this.state.logged} logoutchange={this.handleLogoutChange} />
              <Route path='/' exact component={Home} />
              <Route path='/Signup' component={Signup} />
              <Route exact path='/Login' render={props => (<Login {...props} logged={this.state.logged} loginchange={this.handleLoginChange} />)} />
              <Route path='/Create' component={Create} />
              <Route path='/Attach' component={Attach} />
              <Route path='/Requestrole' component={Requestrole}/>
            </div>
          </div>
        </Router>
      </div>
    );
  }
};
