import React from "react";

class Timer extends React.Component {
  formatTime(timeLeft) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  render() {
    const formatedTime = this.formatTime(this.props.timeLeft);
    return (
      <div>
        <div id="timer-label">{this.props.status}</div>
        <div id="time-left">{formatedTime}</div>
      </div>
    );
  }
}

export default Timer;
