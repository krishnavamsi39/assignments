import React, { Component } from "react";
import "./style.css";
//TODO:change this component name and reuse it in update
class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { inputTodo: "" };
  }
  handleTodoText = e => {
    if (e.keyCode === 13 && e.target.value !== "") {
      this.setState({});
      this.props.onPressEnterKey(e.target.value);
      e.target.value = "";
    }
  };

  render() {
    return (
      <>
        <input
          className="textbox"
          type="text"
          placeHolder="What needs to be done "
          onKeyDown={this.handleTodoText}
        />
      </>
    );
  }
}
export default AddTodo;
