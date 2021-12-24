import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education"
import Experience
 from "./components/Experience";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

 

  render() {
    return (
      <div className="container">
      <h1>CV Application</h1>
        <form>
        <GeneralInfo />
        <Education />
        <Experience />
        <button className="add">Add Experience</button>
        <br />
        <button className="create">Create Application</button>
        </form>
      </div>
    )
  }
}



export default App;
