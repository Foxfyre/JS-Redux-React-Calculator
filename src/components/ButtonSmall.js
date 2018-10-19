import React, { Component } from "react";
import { connect } from "react-redux";
import { updateDisplay } from "../actions/actions";
import { clearDisplay } from "../actions/actions";
import { subtraction } from "../actions/actions";
import { multiplication } from "../actions/actions";
import { division } from "../actions/actions";
import "../css/buttons.css";

class ButtonSmall extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.id === "clear") {
      this.props.clear();
    } else if (this.props.id === "subtract") {
      this.props.subtract(this.props.display);
    } else if (this.props.id === "multiply") {
      this.props.multiply();
    } else if (this.props.id === "divide") {
      this.props.divide();
    } else {
      this.props.display(this.props.value);
    }
  }

  render() {
    return (
      <button
        id={this.props.id}
        value={this.props.value}
        className="button-small"
        onClick={this.handleClick}
      >
        {this.props.button}
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  display: display => dispatch(updateDisplay(display)),
  subtract: display => dispatch(subtraction(display)),
  multiply: display => dispatch(multiplication(display)),
  divide: display => dispatch(division(display)),
  clear: display => dispatch(clearDisplay(display))
});

export default connect(
  null,
  mapDispatchToProps
)(ButtonSmall);