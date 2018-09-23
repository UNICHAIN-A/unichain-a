import React, { Component } from "react";
import logoReact from "../../logo.svg";
import logo from "../../assets/images/present_logo.jpeg";
import { ListGroup, ListGroupItem, Table, Grid, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class SessionCode extends Component {
  render() {
    return (
      <div className="Student-container">
        <Grid>
          <Col xs={12} sm={2} md={1} className="xs-center Present-logo-wrapper">
            <img
              src={logo}
              className="Present-logo"
              alt="logo"
              style={{ width: 150, height: 130 }}
            />
          </Col>
          <Col xs={12} sm={10} md={11}>
            <a href="" className="Main-link text-center">
              HERE IS THE OTP FOR THE SESSION
            </a>
          </Col>

          <Col
            xs={12}
            sm={10}
            mdOffset={1}
            md={11}
            className="text-center"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              fontSize: 40
            }}
          >
            16757
          </Col>
          <Col xs={12} sm={10} md={12} style={{}}>
            Present this code to Students and inform them to scan the code to
            mark their attendene manually using the present! Student APP. If
            they don't have access to the Present Student App, Enter their
            attendence manually using the form.
          </Col>
          <Col
            xs={12}
            sm={10}
            md={12}
            style={{ marginTop: 50, marginBottom: 50 }}
          >
            <Col xs={12} sm={10} md={6} className="text-center">
              <button
                className="Main-button btn"
                style={{
                  width: "fit-content"
                }}
              >
                Automatically Mark the Student
              </button>
            </Col>
            <Col xs={12} sm={10} md={6} className="text-center">
              <button
                className="Main-button btn"
                style={{
                  width: "fit-content"
                }}
              >
                End the Session
              </button>
            </Col>
          </Col>
          <Col
            xs={12}
            sm={10}
            md={12}
            className="text-center"
            style={{ marginTop: 50, marginBottom: 50 }}
          >
            <Col md={12}>
              <Link to="/staff/create-session">
                <button
                  className="Main-button btn"
                  style={{
                    width: 150,
                    paddingLeft: 10,
                    paddingRight: 10
                  }}
                >
                  Back
                </button>
              </Link>
            </Col>
          </Col>
        </Grid>
      </div>
    );
  }
}
