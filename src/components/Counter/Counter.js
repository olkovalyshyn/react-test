import React from "react";

class Counter extends React.Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = (event) => {
    this.setState((prevState) => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <button onClick={this.handleIncrement}>Збільшити</button>
        <button onClick={this.handleDecrement}>Зменшити</button>
      </div>
    );
  }
}

export default Counter;
