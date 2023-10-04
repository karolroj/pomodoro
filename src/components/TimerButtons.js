import React from "react";

class TimerButtons extends React.Component {
  render() {
    let buttonText = this.props.isRunning ? "Stop" : "Start";
    return (
      <div className="mt-3">
        <input
          type="button"
          id="start_stop"
          value={buttonText}
          onClick={this.props.startTimer}
          className="btn btn-sm"
        ></input>
        <input
          type="button"
          id="reset"
          value="Reset"
          onClick={this.props.resetTimer}
          className="btn btn-sm ms-2"
        ></input>
      </div>
    );
  }
}

export default TimerButtons;
