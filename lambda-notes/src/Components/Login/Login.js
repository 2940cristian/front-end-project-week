import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import "./Login.css"


class Login extends Component {
    constructor() {
        super();
    }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
        return e.target.value;
      }

      handleFormSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: this.state.Email,
            password: this.state.Password
        }

        axios.post("https://noteslambda.herokuapp.com/users/login", user)
        .then(response => {
            alert("Logged in");
            this.props.history.push('/home')
        }).catch(err => {
            alert("Email and password are incorrect")
            this.props.history.push('/login')
        })

    }
    render() {
        return(
            <div>
            <div className="loginBody">
                <form className="loginCard" onSubmit={this.handleFormSubmit}>
                    <h1>Sign in</h1>
                    <div className="inputs">
                        Email: <input onChange={this.handleInputChange} name="Email" type="text"></input>
                        Password: <input onChange={this.handleInputChange} name="Password" type="password"></input>
                    </div>
                    <button style={login}>Login</button>
                </form>
            </div>
    </div>
        )
    }
}

const login = {
    textDecoration: "none",
    backgroundColor: "rgb(110, 200, 200)",
    border: "none",
    width: "30%",
    paddingTop: "1%",
    height: "5vh",
    cursor: "pointer"
}

export default Login;