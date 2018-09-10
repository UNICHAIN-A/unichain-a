import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "../logo.svg";
import "../App.css";
import { ListGroup, ListGroupItem, Table, Grid, Col } from "react-bootstrap";

//Actions
import { fetchStudents } from "../actions/login";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    this.props.fetchStudents();
  }
  _renderStudents() {
    return this.props.students.map((student, index) => {
      return (
        <tr key={index}>
          <td>{student.studentId}</td>
          <td>{student.firstName}</td>
          <td>{student.lastName}</td>
        </tr>
      );
    });
  }
  _renderTutors() {
    return this.props.tutors.map((tutor, index) => {
      return (
        <tr key={index}>
          <td>{tutor.tutorId}</td>
          <td>{tutor.firstName}</td>
          <td>{tutor.lastName}</td>
        </tr>
      );
    });
  }
  _renderClassess() {
    return this.props.classes.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.classId}</td>
          <td>{item.class_name}</td>
          <td>{item.instructor.split("#")[1]}</td>
          <td>{item.total_attendees}</td>
        </tr>
      );
    });
  }
  _renderClasses() {
    
      return (
        <tr>
        <td>class1</td>
        <td>Class2</td>
        <td>Class2</td>
        <td>Class2</td>
      </tr>
      );
  
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">
              UniChain-A: Blockchain Attendance "Present!!"
            </h1>
          </header>
        </div>
        {this.props.loading ? null : (
          <Grid>
            <Col md={4}>
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }} colSpan={4}>
                      Class
                    </th>
                  </tr>
                  <tr>
                    <th>#</th>
                    <th>Class Name</th>
                    <th>Instructor</th>
                    <th>Total Attendance</th>
                  </tr>
                </thead>
                <tbody>{this._renderClasses()}</tbody>
              </Table>
            </Col>
            <Col md={4}>
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }} colSpan={4}>
                      Student
                    </th>
                  </tr>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                  </tr>
                </thead>
                <tbody>{this._renderStudents()}</tbody>
              </Table>
            </Col>
            <Col md={4}>
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }} colSpan={4}>
                      Tutor
                    </th>
                  </tr>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                  </tr>
                </thead>
                <tbody>{this._renderTutors()}</tbody>
              </Table>
            </Col>
          </Grid>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tutors: state.login.tutors,
  students: state.login.students,
  classes: state.login.classes,
  loading: state.login.loading
});
const mapDispatchToProps = dispatch => ({
  fetchStudents: () => dispatch(fetchStudents())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
