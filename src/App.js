import logo from "./logo.svg";
import "./App.scss";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";
import Todo from "./views/Todo";
import Covid from "./views/Covid";

const App = () => {
  
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Checking Covid-19 in 2021</h4>
        <Covid></Covid>
      
      </header>
    </div>
  );
};

export default App;
