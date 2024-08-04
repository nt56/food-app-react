import React from "react";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //API Call
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is about section</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
