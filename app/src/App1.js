import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "./logo.svg";
import "./App.css";
import { ListGroup, ListGroupItem } from "react-bootstrap";

//Actions
import { fetchInfo } from "./actions/login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    this.props.fetchInfo();
  }
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">
              UniChain-A: Blockchain Attendance "Present!"
            </h1>
            <h1 className="App-title">
              Message from API: <b>{this.props.message}</b>
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

const mapStateToProps = state => ({
  message: state.login.message
});
const mapDispatchToProps = dispatch => ({
  fetchInfo: () => dispatch(fetchInfo())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
