import React from "react";

class Input extends React.Component {
  state = {
    inputValue: "",
  };

  hundleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div>
        <p>Форма інпута</p>
        <input
          value={this.state.inputValue}
          onChange={this.hundleInputChange}
        />
      </div>
    );
  }
}

export default Input;
