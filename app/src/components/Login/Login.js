import React, { Component } from "react";
import { Link } from "react-router-dom";
import logoMain from "../../assets/images/present_logo.jpeg";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  signIn = () => {
    this.props.history.push("/staff");
  };
  render() {
    const { loginName } = this.props;
    return (
      <div style={style.root}>
        <div className="col-md-7 col-lg-6 col-sm-12" style={style.selection}>
          <div
            className="col-md-8 col-lg-8 col-sm-12"
            style={style.btnContainer}
          >
            <img src={logoMain} style={{ width: 150 }} />
            <div style={style.heading}>
              {` Welcome to Deakin ${loginName} Login Portal`}
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-sm-12"
            style={{
              textAlign: "center",
              fontSize: 24,
              textDecoration: "underline"
            }}
          >
            SINGLE SIGN ON
          </div>
          <div
            className="col-md-6 col-lg-6 col-sm-12"
            style={style.formContainer}
          >
            <label>Username</label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div
            className="col-md-6 col-lg-6 col-sm-12"
            style={style.formContainer}
          >
            <label>Password</label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div
            className="col-md-12 col-lg-12 col-sm-12"
            style={style.LoginbtnContainer}
          >
            {loginName == "Staff" ? (
              <button
                className="Main-button btn"
                onClick={() => this.signIn()}
                style={{ width: 200 }}
              >
                Sign On
              </button>
            ) : (
              <Link to="/student">
                <button className="Main-button btn" style={{ width: 200 }}>
                  Sign On
                </button>
              </Link>
            )}
          </div>
          <div
            className="col-md-8 col-lg-8 col-sm-12"
            style={style.formContainer}
          >
            <Link to="/login">
              <button className="Main-button btn" style={style.button}>
                Need help accessing your account
              </button>
            </Link>
            <Link to="/login">
              <button className="Main-button btn" style={style.button}>
                Terms of use
              </button>
            </Link>
          </div>
          <div
            className="col-md-12 col-lg-12 col-sm-12"
            style={style.simpleBtn}
          >
            <Link to="/login">
              <button className="Main-button btn" style={{ width: "200px" }}>
                back
              </button>
            </Link>
          </div>
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
  heading: {
    alignSelf: "center",
    marginLeft: 10
  },
  selection: {
    backgroundColor: "white",
    paddingTop: 30,
    paddingBottom: 30,
    fontSize: 20,
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    color: "#297283"
  },
  loginContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  button: {
    textTransform: "none",
    color: "black",
    backgroundColor: "white",
    border: "1px solid black"
  },
  simpleBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  whiteBtn: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#297283"
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20
  },
  formContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20
  },
  LoginbtnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  }
};
