import React from "react";

class Break extends React.Component {
  render() {
    return (
      <div className="text-center fw-bold mt-2">
        <div className="d-flex justify-content-center mb-2">
          <div id="break-label">Break Length: </div>
          <div id="break-length" className="ms-1">
            {this.props.breakLength} minutes
          </div>
        </div>
        <input
          type="button"
          id="break-decrement"
          value="-1"
          className="btn btn-sm"
          onClick={this.props.decrement}
          disabled={this.props.isRunning}
        ></input>
        <input
          type="button"
          id="break-increment"
          value="+1"
          className="btn btn-sm ms-2"
          onClick={this.props.increment}
          disabled={this.props.isRunning}
        ></input>
      </div>
    );
  }
}

export default Break;
