import React, { Component } from "react";
import logoMain from "../assets/images/present_logo.jpeg";
import { Link } from "react-router-dom";
export default class LoginContainer extends Component {
  render() {
    return (
      <div style={style.root}>
        <div className="col-md-3 col-lg-3 col-sm-4" style={style.selection}>
          <div>LOG INTO</div>
          <div>
            <img src={logoMain} style={{ width: 250 }} />
          </div>
          <div>AS</div>
          <div style={style.btnContainer}>
            <Link to="/login/staff" style={style.button}>
              <button className="Main-button btn">staff</button>
            </Link>
            <Link to="/login/student" style={style.button}>
              <button className="Main-button btn">current student</button>
            </Link>
          </div>
          <div style={style.simpleBtn}>
            <button className="btn">New User</button>
          </div>
        </div>
        <div>
          <Link to="/">
            <button style={style.whiteBtn} className="btn">
              BACK
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const style = {
  root: {
    backgroundColor: "#297283",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100vh",
    alignItems: "center"
  },
  selection: {
    backgroundColor: "white",
    padding: 30,
    fontSize: 20,
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    color: "#297283"
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    width: "100%"
  },
  simpleBtn: {
    alignSelf: "flex-end"
  },
  whiteBtn: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#297283"
  },
  btnContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  }
};
