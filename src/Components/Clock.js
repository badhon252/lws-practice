import React, { Component } from "react";

export default class Clock extends Component {
  state = {
    date: new Date(),
    local: "bn-BD",
    btn: true,
  };

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // bnClick = () => {
  //   this.setState({ local: "bn-BD" });
  //   console.log("clicked");
  // };
  // enClick = () => {
  //   this.setState({ local: "en-US" });
  //   console.log("clicked");
  // };

  onClick = (value) => {
    this.setState({ local: value });
    // console.log("clicked");
  };

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  style = {
    // margin: " auto 40%",
    // backgroundColor: "grey",
    // maxHeight: "100vh",
    // color: "black",
    // border: "1px solid black",
    textAlign: "center",
  };
  render = () => {
    return (
      <div style={this.style}>
        <p>Local time</p>
        <h1>{this.state.date.toLocaleTimeString(this.state.local)}</h1>
        {this.state.local === "en-US" ? (
          <button onClick={()=>this.onClick("bn-BD")}>
            {this.state.btn && "Translate to Bangla"}
          </button>
        ) : (
         /*  {<button onClick={() => this.setState({ local: "en-US" })}> } */
         <button onClick={()=>this.onClick("en-US")}>
            {this.state.btn && "Translate to English"}
          </button>
        )}
      </div>
    );
  };
}
