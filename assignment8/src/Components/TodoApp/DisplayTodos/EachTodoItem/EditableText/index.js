import React, { Component } from "react";
import "./style.css";
import AddTodo from "../../../AddTodo";

class EditableText extends Component {
  handleClick = () => {
    this.props.handleEditable();
  };
  handleEdit = message => {
    this.props.onPressEnterKey(this.props.todo.id, message);
    this.props.handleEditable();
  };

  renderMessage = () => {
    if (this.props.isEditable) {
      return (
        <AddTodo
          onPressEnterKey={this.handleEdit}
          TextClass="update-text"
          TodoTextValue={this.props.todo.todoText}
        />
      );
    }
    return this.props.todo.todoCompleted ? (
      <strike className="strikemessage">{this.props.todo.todoText} </strike>
    ) : (
      <span className="message" onDoubleClick={this.handleClick}>
        {" "}
        {this.props.todo.todoText}{" "}
      </span>
    );
  };
  render() {
    return this.renderMessage();
  }
}
export default EditableText;
