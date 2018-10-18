import React, { Component } from "react";
import "../css/display.css";

class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="display" className="lcd-screen">
          {this.props.display}
      </div>
    );
  }
}

export default Display;
