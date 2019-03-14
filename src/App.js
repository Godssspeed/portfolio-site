import React, { Component } from "react";
import logo from "./logo.svg";
import "./reset.css";
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {routes}
      </div>
    );
  }
}

export default App;
