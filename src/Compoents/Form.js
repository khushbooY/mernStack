import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { BrowserRouter, Route, Link } from "react-router-dom";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    submit() {
        var Name = document.getElementById("Name").value
        var shopName = document.getElementById("shopName").value;

        var myData = {
            "Name": Name,
            "password": shopName,

        }
        // console.log("myDara", myData, document.getElementById("Name"), myData)




        axios.post("/sign_up", myData).then(function (response) {
            console.log("response", response.data);
            alert(response.data)
        })
            .catch(function (error) {
                console.log(error);
            });






    }
    render() {
        return (<div style={{ textAlign: "center", width: "50%", marginLeft: "25%", border: "2px solid black" }}>
            <h1>{"SIGN UP"}</h1><br></br><br></br>
           Name: <input id="Name"></input><br></br><br></br>
           password <input id="shopName"></input><br></br><br></br>

            <button onClick={this.submit}>Submit</button><br></br><br></br>

            <Link to="/login">GO TO LOGIN IN</Link>
        </div>);
    }
}



export default Form;