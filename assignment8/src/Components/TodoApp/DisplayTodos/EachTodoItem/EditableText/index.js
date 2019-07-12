import React, { Component } from "react";

class EditableText extends Component {
  constructor(props) {
    super(props);
    this.state = { editable: false, editableTodo: "" };
  }
  handleClick = () => {
    this.setState({ editable: true, editableTodo: this.props.todo.todoText });
  };
  handleTodoText = e => {
    if (e.keyCode === 13) {
      this.setState({ editable: false, editableTodo: this.state.editableTodo });
      this.props.updateTodo(this.state.editableTodo, this.props.todo.id);
    }
  };
  handleChange = e => {
    this.setState({ editableTodo: e.target.value });
  };
  handleMessage = () => {
    if (this.state.editable)
      return (
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.editableTodo}
          onKeyDown={this.handleTodoText}
        />
      );
    if (!this.state.editable) {
      if (!this.props.todo.todoCompleted)
        return (
          <span className="message" onDoubleClick={this.handleClick}>
            {this.props.todo.todoText}{" "}
          </span>
        );
      else
        return <strike className="message">{this.props.todo.todoText} </strike>;
    }
  };
  render() {
    return this.handleMessage();
  }
}
export default EditableText;
