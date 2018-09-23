import React, { Component } from "react";
import logoReact from "../../logo.svg";
import logo from "../../assets/images/present_logo.jpeg";
import { ListGroup, ListGroupItem, Table, Grid, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CreateSession extends Component {
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
              WELCOME TO PRESENT! Dr. ALESSIO BONTI
            </a>
          </Col>
          <Col
            xs={12}
            sm={10}
            md={11}
            className="Main-link text-center"
            style={{
              textTransform: "none",
              textDecoration: "none",
              fontSize: 16
            }}
          >
            We wish you all the best for your session!
          </Col>

          <Col
            xs={12}
            sm={10}
            md={12}
            style={{ marginTop: 50, marginBottom: 50 }}
          >
            <Col xs={12} sm={10} md={6}>
              <p className="Main-button btn">
                <b>SELECT YOUR CURRENT SESSION </b>
              </p>
            </Col>
            <Col xs={12} sm={10} md={6} className="text-center">
              <select className="session">
                <option value="">Select Session</option>
                <option value="0">SIT 764-1:00 PM-3:00 PM</option>
                <option value="1">SIT 764-2:00 PM-4:00 PM</option>
                <option value="2">SIT 764-9:00 AM-11:00 AM</option>
                <option value="3">SIT 764-7:00 PM-9:00 PM</option>
              </select>
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
              <Link to="/staff/session-code">
                <button
                  className="Main-button btn"
                  style={{
                    width: "fit-content",
                    padding: 30
                  }}
                >
                  OBTAIN A ONE TIME PASSWORD
                </button>
              </Link>
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
              <Link to="/login">
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
