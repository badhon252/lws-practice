import React, { Component } from "react";

export default class Clock extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  style = {
    margin: " auto 40%",
    backgroundColor: "yellow",
    color: "black",
    border: "1px solid black",
    textAlign: "center",
  };
  render() {
    return (
      <div style={this.style}>
        <p>Local time</p>
        <h1>{this.state.date.toLocaleTimeString(this.props.local)}</h1>
      </div>
    );
  }
}
