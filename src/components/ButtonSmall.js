import React, { Component } from "react";
import { connect } from "react-redux";
import { updateDisplay } from "../actions/actions";
import { clearDisplay } from "../actions/actions";
import "../css/buttons.css";

class ButtonSmall extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.id === "clear") {
      this.props.clear();
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

/*export default ButtonSmall;*/

const mapDispatchToProps = dispatch => ({
  display: display => dispatch(updateDisplay(display)),
  clear: display => dispatch(clearDisplay(display))
});

export default connect(
  null,
  mapDispatchToProps
)(ButtonSmall);