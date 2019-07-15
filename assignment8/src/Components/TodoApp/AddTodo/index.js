import React, { Component } from "react";
import "./style.css";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { inputTodo: this.props.TodoTextValue };
  }
  handleTodoText = e => {
    if (e.keyCode === 13 && e.target.value !== "") {
      this.props.onPressEnterKey(this.state.inputTodo);
      this.setState({ inputTodo: "" });
    }
  };
  handleOnchange = e => {
    this.setState({ inputTodo: e.target.value });
  };
  render() {
    return (
      <>
        <input
          value={this.state.inputTodo}
          className={this.props.TextClass}
          type="text"
          placeHolder="What needs to be done "
          onChange={this.handleOnchange}
          onKeyDown={this.handleTodoText}
        />
      </>
    );
  }
}
export default AddTodo;
