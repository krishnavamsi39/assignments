import React, { Component } from "react";
import "./style.css";

class EditableText extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditable: false, editableTodo: "" };
  }
  handleClick = () => {
    this.setState({ isEditable: true, editableTodo: this.props.todo.todoText });
  };
  handleTodoText = e => {
    if (e.keyCode === 13 && e.target.value !== "") {
      this.setState({
        isEditable: false,
        editableTodo: this.state.editableTodo
      });
      this.props.updateTodo(this.state.editableTodo, this.props.todo.id);
    }
  };
  handleChange = e => {
    this.setState({ editableTodo: e.target.value });
  };
  renderMessage = () => {
    if (this.state.isEditable)
      return (
        <input
          type="text"
          className="textBox"
          onChange={this.handleChange}
          value={this.state.editableTodo}
          onKeyDown={this.handleTodoText}
        />
      );
    if (!this.state.isEditable) {
      if (!this.props.todo.todoCompleted)
        return (
          <span className="message" onDoubleClick={this.handleClick}>
            {this.props.todo.todoText}{" "}
          </span>
        );
      else
        return (
          <strike className="strikemessage">{this.props.todo.todoText} </strike>
        );
    }
  };
  render() {
    return this.renderMessage();
  }
}
export default EditableText;
