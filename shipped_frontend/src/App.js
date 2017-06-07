import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Link } from "react-router-dom";
import SignIn from "./SignIn";
import Profile from "./Profile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Users: [],
      LogIn: false
    };
  }
  render() {
    if (this.state.LogIn === false) {
      return <SignIn logInStatus={this.state.LogIn} />;
    } else {
      return <Profile userList={this.state.Users} />;
    }
  }
  componentWillMount() {
    axios.get("/users").then(
      function(response) {
        this.setState({ User: response.data });
      }.bind(this)
    );
  }
}

export default App;
