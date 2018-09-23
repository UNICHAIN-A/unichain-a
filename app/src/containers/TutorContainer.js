import React, { Component } from "react";
import CreateSession from "../components/Tutor/CreateSession";
export default class TutorContainer extends Component {
  render() {
    console.log("Tutor", this.props);
    return (
      <div>
        <CreateSession />
      </div>
    );
  }
}
