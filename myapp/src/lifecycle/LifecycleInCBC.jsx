import React, { Component } from "react";

export default class LifecycleInCBC extends Component {
  state = { value: 0 };

  componentDidMount() {
    console.log("MOUNTING PHASE");
  }

  componentDidUpdate() {
    console.log("UPDATING PHASE");
  }

  componentWillUnmount() {
    console.log("UNMOUNTING PHASE");
  }

  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <h1>Life-Cycle In CBC</h1>
        <h2>Counter {this.state.value}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
