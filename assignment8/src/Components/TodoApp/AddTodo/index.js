import React, { Component } from "react";
import "./style.css";
class AddTodo extends Component {
  constructor(props) {
    super(props);
  }
  handleTodoText = e => {
    if (e.keyCode === 13 && e.target.value !== "") {
      this.props.updateTodo(e.target.value);
      e.target.value = "";
    }
  };

  render() {
    return (
      <>
        <input
          class="textbox"
          type="text"
          placeHolder="What needs to be done "
          onKeyDown={this.handleTodoText}
        />
      </>
    );
  }
}
export default AddTodo;
