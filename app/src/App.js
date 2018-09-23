import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import "./App.css";
import AppContainer from "./containers/AppContainer";
import LoginContainer from "./containers/LoginContainer";
import Login from "./components/Login/Login";
import StudentContainer from "./containers/StudentContainer";
import ScanCode from "./components/Student/ScanCode";
import Session from "./components/Student/Session";
import TutorContainer from "./containers/TutorContainer";
import CreateSession from "./components/Tutor/CreateSession";
import SessionCode from "./components/Tutor/SessionCode";

const newHistory = createBrowserHistory();
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  componentDidMount() {}
  render() {
    return (
      <Router history={newHistory}>
        <Switch>
          <Route exact path="/" component={AppContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route
            exact
            path="/login/staff"
            render={props => {
              return <Login loginName={"Staff"} history={newHistory} />;
            }}
          />
          <Route
            exact
            path="/login/student"
            render={props => {
              return <Login loginName={"Student"} history={newHistory} />;
            }}
          />
          <Route exact path="/student" component={StudentContainer} />
          <Route exact path="/student/scancode" component={ScanCode} />
          <Route exact path="/student/welcome" component={Session} />
          <Route exact path="/staff" component={TutorContainer} />
          <Route exact path="/staff/create-session" component={CreateSession} />
          <Route exact path="/staff/session-code" component={SessionCode} />
        </Switch>
      </Router>
    );
  }
}
