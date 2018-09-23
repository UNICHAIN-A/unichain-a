import React, { Component } from "react";
import logoReact from "../../logo.svg";
import logo from "../../assets/images/present_logo.jpeg";
import { ListGroup, ListGroupItem, Table, Grid, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class ScanCode extends Component {
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
                welcome to present! miss bansri modi
              </a>
            </Col>
            <div className="clearfix" />
            <Col
              xs={12}
              sm={10}
              md={11}
              className="Student-message Margin-top-0 Margin-bottom-0 col-sm-offset-2 col-md-offset-1"
            >
              <p>
                We wish you all the very best for your session!. Hope you get
                the best learning from it.
              </p>
            </Col>
            <Col
              xs={12}
              sm={10}
              md={11}
              className="text-center  col-sm-offset-2 col-md-offset-1"
            >
              <Link to="/student/welcome">
                <button className="Main-button btn">
                  scan the qr code for the session
                </button>
              </Link>
            </Col>
            <Col
              xs={12}
              sm={10}
              md={11}
              className="text-center col-sm-offset-2 col-md-offset-1"
            >
              <span className="Qr-code-placeholder">JK76QA</span>
            </Col>
          </Grid>
        )}
      </div>
    );
  }
}
