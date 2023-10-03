import React from "react";

class Session extends React.Component {
  render() {
    return (
      <div>
        <div id="session-label">Session Length</div>
        <div id="session-length">{this.props.sessionLength}</div>
        <input
          type="button"
          id="session-decrement"
          value="-1"
          onClick={this.props.decrement}
        ></input>
        <input
          type="button"
          id="session-increment"
          value="+1"
          onClick={this.props.increment}
        ></input>
      </div>
    );
  }
}

export default Session;
