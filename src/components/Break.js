import React from "react";

class Break extends React.Component {
  render() {
    return (
      <div>
        <div id="break-label">Break Length</div>
        <div id="break-length">{this.props.breakLength}</div>
        <input
          type="button"
          id="break-decrement"
          value="-1"
          onClick={this.props.decrement}
        ></input>
        <input
          type="button"
          id="break-increment"
          value="+1"
          onClick={this.props.increment}
        ></input>
      </div>
    );
  }
}

export default Break;
