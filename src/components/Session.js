import React from "react";

class Session extends React.Component {
  render() {
    return (
      <div className="text-center fw-bold mt-2">
        <div className="d-flex justify-content-center mb-2">
          <div id="session-label">Session Length:</div>
          <div id="session-length" className="ms-1">
            {this.props.sessionLength} minutes
          </div>
        </div>
        <input
          type="button"
          id="session-decrement"
          value="-1"
          className="btn btn-sm"
          onClick={this.props.decrement}
          disabled={this.props.isRunning}
        ></input>
        <input
          type="button"
          id="session-increment"
          value="+1"
          className="btn btn-sm ms-2"
          onClick={this.props.increment}
          disabled={this.props.isRunning}
        ></input>
      </div>
    );
  }
}

export default Session;
