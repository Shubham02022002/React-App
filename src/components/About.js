import React from "react";
import ProfileClass from "./ProfileClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "DummyName",
      },
    };
  }

  componentDidMount() {}
  render() {
    return (
      <>
        <ProfileClass />
      </>
    );
  }
}
export default About;
