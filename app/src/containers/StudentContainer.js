import React, { Component } from "react";
import { connect } from "react-redux";

import logoReact from "../logo.svg";
import logo from "../assets/images/present_logo.jpeg";

import "../App.css";
import { ListGroup, ListGroupItem, Table, Grid, Col } from "react-bootstrap";

//Actions
//import { fetchStudents } from "../actions/login";

class AppContainer extends Component {


    _renderStudentWelcome() {
    
        return (
            <div className="Student-container">
        
            {this.props.loading ? null : (
              <Grid>
                <Col xs={12} sm={2} md={1} className="xs-center Present-logo-wrapper">
                    <img src={logo} className="Present-logo" alt="logo"/>
                </Col>
                <Col xs={12} sm={10} md={11}>
                    <a href="" className="Main-link text-center">welcome to sit 764 session - practical 9:00 am monday</a>
                </Col>
                <div className="clearfix"></div>
                <Col xs={12} sm={10} md={11}  className="Student-message col-sm-offset-2 col-md-offset-1">
                    <p>We wish you all the very best for your session!. Hope you get the best learning from it.</p>
                    <p>Welcome to SIT 764. Yout Tutor is Dr. Alessio Bonti and your session time is 2 hours.</p>
                    <p>Your attendance has been marked with your time and location.</p>
                </Col>
                <Col xs={12} sm={10} md={11} className="text-center Main-button-wrapper col-sm-offset-2 col-md-offset-1">
                  <button className="Main-button btn">Enjoy your session. Exit</button>
                </Col>
             
              </Grid>
            )}
          </div>
        );
    
    }

    _renderStudentSession(){
        return (
            <div className="Student-container">
        
            {this.props.loading ? null : (
              <Grid>
                <Col xs={12} sm={2} md={1} className="xs-center Present-logo-wrapper">
                    <img src={logo} className="Present-logo" alt="logo"/>
                </Col>
                <Col xs={12} sm={10} md={11}>
                    <a href="" className="Main-link text-center">welcome to present! miss bansri modi</a>
                </Col>
                <div className="clearfix"></div>
                <Col xs={12} sm={10} md={11}  className="Student-message Margin-top-0 Margin-bottom-0 col-sm-offset-2 col-md-offset-1">
                    <p>We wish you all the very best for your session!. Hope you get the best learning from it.</p>
                </Col>
                <Col xs={12} sm={10} md={11} className="text-center  col-sm-offset-2 col-md-offset-1">
                  <button className="Main-button btn">scan the qr code for the session</button>
                </Col>
                <Col xs={12} sm={10} md={11} className="text-center col-sm-offset-2 col-md-offset-1">
                    <span className="Qr-code-placeholder">JK76QA</span>
                </Col>
                <Col xs={12} className="Back-button-wrapper text-center">
                    <button className="Back-button btn">BACK</button>
                </Col>
              </Grid>
            )}
          </div>
        );
    }

  render() {
    return (
      <div>
        {this._renderStudentWelcome()}
      
        {this._renderStudentSession()}
      </div>
    );
  }


  




  


}

const mapStateToProps = state => ({
  students: state.login.students
});

export default connect(
  mapStateToProps
)(AppContainer);
