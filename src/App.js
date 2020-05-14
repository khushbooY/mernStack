import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from '../src/Compoents/List'
import Form from '../src/Compoents/Form'
import Form2 from '../src/Compoents/Form2'

import { BrowserRouter, Route, Link } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      {/* <List></List> */}
      <Route exact path="/">   <Form></Form></Route>
      <Route path="/login">   <Form2></Form2></Route>



    </BrowserRouter>
  );
}

export default App;
