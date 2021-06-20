import React from "react";

class Input extends React.Component {
  state = {
    inputValue: "",
  };

  hundleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  hundleSubmit = (event) => {
    console.log("!!! Click on submit");
    console.log(event.target.type);
  };

  hundleBlur = () => {
    console.log("LOST FOCUS FROM INPUT");
  };

  render() {
    return (
      <div>
        <p>Форма інпута</p>
        <input
          value={this.state.inputValue}
          onChange={this.hundleInputChange}
        />

        <button
          type="button"
          onClick={this.hundleSubmit}
          onBlur={this.hundleBlur}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Input;
