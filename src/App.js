import React, { Component } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Search from "./components/Search/Search";
import initialDetails from "./data/initialDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search details={initialDetails}></Search>
      </div>
    );  
  }
}
export default App;
