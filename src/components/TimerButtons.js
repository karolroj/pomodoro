import React from "react";

class TimerButtons extends React.Component {
  render() {
    let buttonText = this.props.isRunning ? "Stop" : "Start";
    return (
      <div>
        <input
          type="button"
          id="start_stop"
          value={buttonText}
          onClick={this.props.startTimer}
        ></input>
        <input
          type="button"
          id="reset"
          value="Reset"
          onClick={this.props.resetTimer}
        ></input>
      </div>
    );
  }
}

export default TimerButtons;
