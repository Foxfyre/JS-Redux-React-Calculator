import React, { Component } from "react";
import "../css/buttons.css";

class ButtonLargeH extends Component {
  render() {
    return (
      <div id={this.props.id}
      className="button-large-h"
      >
      {this.props.button}
      </div>
    );
  }
}

export default ButtonLargeH;