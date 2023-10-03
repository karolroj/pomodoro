import "./App.css";
import Break from "./components/Break";
import Session from "./components/Session";
import Timer from "./components/Timer";
import TimerButtons from "./components/TimerButtons";
import React from "react";

class Calculator extends React.Component {
  initState = {
    breakLength: 5,
    sessionLength: 25,
    timeLeft: 25 * 60,
    isRunning: false,
    status: "session",
  };

  constructor(props) {
    super(props);
    this.state = this.initState;
    this.resetTimer = this.resetTimer.bind(this);
    this.startStopTimer = this.startStopTimer.bind(this);
  }

  lockButtons(condition) {
    document.getElementById("break-decrement").disabled = condition;
    document.getElementById("break-increment").disabled = condition;
    document.getElementById("session-decrement").disabled = condition;
    document.getElementById("session-increment").disabled = condition;
  }

  setStatusAndTimer(status, timeLeft) {
    this.setState({
      status: status,
      timeLeft: timeLeft,
    });
  }

  resetTimer() {
    this.setState(this.initState);
    clearInterval(this.timer);
    document.getElementById("beep").currentTime = 0;
    this.lockButtons(false);
  }

  startStopTimer() {
    if (this.state.isRunning) {
      clearInterval(this.timer);
      this.setState({ isRunning: false });
      this.lockButtons(false);
      return;
    }

    this.lockButtons(true);
    this.setState({ isRunning: true, timeLeft: this.state.sessionLength * 60 });
    this.timer = setInterval(() => {
      this.setState({ timeLeft: this.state.timeLeft - 1 });

      if (this.state.timeLeft === 0) {
        document.getElementById("beep").play();

        if (this.state.status === "break") {
          this.setStatusAndTimer("session", this.state.sessionLength * 60);
        }

        if (this.state.status === "session") {
          this.setStatusAndTimer("break", this.state.breakLength * 60);
        }
      }
    }, 1000);
  }

  render() {
    return (
      <div id="pomodoro">
        <Break
          breakLength={this.state.breakLength}
          increment={() => {
            if (this.state.breakLength + 1 > 60) return;
            this.setState({ breakLength: this.state.breakLength + 1 });
          }}
          decrement={() => {
            if (this.state.breakLength - 1 <= 0) return;
            this.setState({ breakLength: this.state.breakLength - 1 });
          }}
        />
        <Session
          sessionLength={this.state.sessionLength}
          isRunning={this.state.isRunning}
          increment={() => {
            if (this.state.sessionLength + 1 > 60) return;
            this.setState({ sessionLength: this.state.sessionLength + 1 });
          }}
          decrement={() => {
            if (this.state.sessionLength - 1 <= 0) return;
            this.setState({ sessionLength: this.state.sessionLength - 1 });
          }}
        />
        <Timer timeLeft={this.state.timeLeft} status={this.state.status} />
        <TimerButtons
          resetTimer={this.resetTimer}
          startTimer={this.startStopTimer}
          isRunning={this.state.isRunning}
        />
        <audio
          id="beep"
          src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
        />
      </div>
    );
  }
}

export default Calculator;
