import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "../logo.svg";
import logoMain from "../assets/images/present_logo.jpeg";
import "../App.css";
import { Link } from "react-router-dom";

//Actions
import { fetchStudents } from "../actions/login";

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  render() {
    return (
      <div style={style.root}>
        <img src={logoMain} />
        <Link to="/login">
          <button className="Main-button btn" style={{ width: 150 }}>
            jump in
          </button>
        </Link>
      </div>
    );
  }
}

const style = {
  root: {
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100vh",
    alignItems: "center"
  }
};
