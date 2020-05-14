import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    sendData() {

        var Name = document.getElementById("name").value
        var password = document.getElementById("password").value;
        // var status = document.getElementById("status").value;
        var myData = {
            "Name": Name,
            "password": password,

        }
        // console.log("myDara", myData, document.getElementById("Name"), myData)
        axios.post("/loginIn", myData).then(function (response) {
            console.log(response);
            console.log("response", response.data);
            alert(response.data)
        })
            .catch(function (error) {
                console.log(error);
            });


    }
    render() {
        return (<div style={{ textAlign: "center", width: "50%", marginLeft: "25%", border: "2px solid black" }}>
            <h1>LOGIN</h1><br></br><br></br>
            Name:      <input id="name"></input><br></br><br></br>
            password<input type="password" id="password"></input><br></br><br></br>
            <button onClick={this.sendData}>Submit</button><br></br><br></br>

            <Link to="/">GO TO SIGN UP</Link>

        </div>);
    }
}

export default Login;