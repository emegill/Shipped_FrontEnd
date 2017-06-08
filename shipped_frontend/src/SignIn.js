import React, { Component } from "react";
import axios from "axios";
import "./signin.css";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.logIn = this.logIn.bind(this);
        this.createAccount = this.createAccount.bind(this);
    }
    render() {
        return (
            <div className="signin-div">
                <h2>Sign In</h2>
                <input onChange={this.setUsername} placeholder="username" />
                <input onChange={this.setPassword} placeholder="password" />
                <button onClick={this.logIn}> Log In </button>
                <h2> Create Account </h2>
                <input onChange={this.setUsername} placeholder="username" />
                <input onChange={this.setPassword} placeholder="password" />
                <button onClick={this.createAccount}> Create Account </button>
            </div>
        );
    }
    setUsername(event) {
        this.setState({ username: event.target.value });
    }
    setPassword(event) {
        this.setState({ password: event.target.value });
    }
    logIn() {
        axios
            .get("/users", {
                params: {
                    name: this.state.username,
                    password: this.state.password
                }
            })
            .then(
                function(response) {
                    console.log(response);
                    this.props.logInFunction(
                        response.data.views,
                        response.data.user_id
                    );
                }.bind(this)
            );
    }
    createAccount() {
        axios
            .post("/users", {
                data: {
                    name: this.state.username,
                    password: this.state.password
                }
            })
            .then(function(response) {
                console.log(response.data);
            });
    }
}

export default SignIn;
