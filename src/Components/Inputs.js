import React, { Component } from "react";

export default class Inputs extends Component {
  state = {
    text: "Hello World!",
    textarea: "this is textarea",
  };
  handleChange = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.type.value,
    });
  };

  render() {
    const { text, textarea } = this.state;
    return (
      <div>
        <input
          name="text"
          type="text"
          value={text}
          onChange={this.handleChange}
        />
        <input
          name="textarea"
          type="textarea"
          value={textarea}
          onChange={this.handleChange}
        />
        <div>
          <p>{this.state.text}</p>
          <p>{textarea}</p>
        </div>
      </div>
    );
  }
}
