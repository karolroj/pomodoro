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
    breakSessionVisibility: false,
  };

  constructor(props) {
    super(props);
    this.state = this.initState;
    this.resetTimer = this.resetTimer.bind(this);
    this.startStopTimer = this.startStopTimer.bind(this);
    this.handleBreakClick = this.handleBreakClick.bind(this);
    this.handleSessionClick = this.handleSessionClick.bind(this);
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
  }

  handleBreakClick() {
    this.setState({
      breakSessionVisibility: true,
    });
  }

  handleSessionClick() {
    this.setState({
      breakSessionVisibility: false,
    });
  }

  incrementLength(lengthName) {
    if (this.state[lengthName] + 1 > 60) return;
    this.setState({ [lengthName]: this.state[lengthName] + 1 });
  }

  decrementLength(lengthName) {
    if (this.state[lengthName] - 1 <= 0) return;
    this.setState({ [lengthName]: this.state[lengthName] - 1 });
  }

  startStopTimer() {
    if (this.state.isRunning) {
      clearInterval(this.timer);
      this.setState({ isRunning: false });
      return;
    }

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
      <div>
        <div className="container ">
          <h3 className="fw-bold">Pomodoro</h3>
          <hr />
        </div>
        <div id="pomodoro" className="container">
          <div className="row">
            <div className="col-12 text-center mt-3 ">
              <h5 className="fw-bold">Settings</h5>
              <input
                type="button"
                className="btn btn-sm fw-bold shadow-btn"
                value="Break"
                onClick={this.handleBreakClick}
              />
              <input
                type="button"
                className="btn btn-sm ms-2 fw-bold shadow-btn"
                value="Session"
                onClick={this.handleSessionClick}
              />
            </div>
            {this.state.breakSessionVisibility && (
              <Break
                isRunning={this.state.isRunning}
                breakLength={this.state.breakLength}
                increment={() => this.incrementLength("breakLength")}
                decrement={() => this.decrementLength("breakLength")}
              />
            )}
            {!this.state.breakSessionVisibility && (
              <Session
                sessionLength={this.state.sessionLength}
                isRunning={this.state.isRunning}
                increment={() => this.incrementLength("sessionLength")}
                decrement={() => this.decrementLength("sessionLength")}
              />
            )}
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <Timer
                timeLeft={this.state.timeLeft}
                status={this.state.status}
              />
              <TimerButtons
                resetTimer={this.resetTimer}
                startTimer={this.startStopTimer}
                isRunning={this.state.isRunning}
              />
            </div>
          </div>
          <audio
            id="beep"
            src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
