import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">
              UniChain-A: Blockchain Attendance "Present!"
            </h1>
          </header>
        </div>
        <ListGroup>
          <ListGroupItem header="Supervisor">Alessio Bonti</ListGroupItem>
          <ListGroupItem header="Team Lead">Richard McGann</ListGroupItem>
          <ListGroupItem header="Product Owner">Suresh Adepu</ListGroupItem>
          <ListGroupItem header="Backend Developer">Chandra</ListGroupItem>
          <ListGroupItem header="Backend Developer">Anil</ListGroupItem>
          <ListGroupItem header="Frontend Developer">Ahsan Tariq</ListGroupItem>
          <ListGroupItem header="UI/UX Designer">Bansri Modi</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default App;
