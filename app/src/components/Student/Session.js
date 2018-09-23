import React, { Component } from "react";
import logoReact from "../../logo.svg";
import logo from "../../assets/images/present_logo.jpeg";
import { ListGroup, ListGroupItem, Table, Grid, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Session extends Component {
  render() {
    return (
      <div className="Student-container">
        {this.props.loading ? null : (
          <Grid>
            <Col
              xs={12}
              sm={2}
              md={1}
              className="xs-center Present-logo-wrapper"
            >
              <img src={logo} className="Present-logo" alt="logo" />
            </Col>
            <Col xs={12} sm={10} md={11}>
              <a href="" className="Main-link text-center">
                welcome to sit 764 session - practical 9:00 am monday
              </a>
            </Col>
            <div className="clearfix" />
            <Col
              xs={12}
              sm={10}
              md={11}
              className="Student-message col-sm-offset-2 col-md-offset-1"
            >
              <p>
                We wish you all the very best for your session!. Hope you get
                the best learning from it.
              </p>
              <p>
                Welcome to SIT 764. Yout Tutor is Dr. Alessio Bonti and your
                session time is 2 hours.
              </p>
              <p>
                Your attendance has been marked with your time and location.
              </p>
            </Col>
            <Col
              xs={12}
              sm={10}
              md={11}
              className="text-center Main-button-wrapper col-sm-offset-2 col-md-offset-1"
            >
              <Link to="/login">
                <button className="Main-button btn">
                  Enjoy your session. Exit
                </button>
              </Link>
            </Col>
          </Grid>
        )}
      </div>
    );
  }
}
