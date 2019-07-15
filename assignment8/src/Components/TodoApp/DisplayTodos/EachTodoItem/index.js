import React, { Component } from "react";
import "./style.css";
import EditableText from "./EditableText";
class EachTodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditable: false };
  }
  handleEditable = () => {
    this.setState({ isEditable: !this.state.isEditable });
  };
  handleToggle = () => {
    this.props.onToggleTaskCompletetion(this.props.todo.id);
  };

  handleDelete = () => {
    if (window.confirm("Do you want to delete?"))
      this.props.deleteTodo(this.props.todo.id);
  };
  render() {
    return (
      <div className="eachdiv">
        <div className="checkandmessage">
          <label class="container">
            <input
              type="checkbox"
              className="check"
              checked={this.props.todo.todoCompleted}
              onClick={this.handleToggle}
            />
            <span class="checkmark" />
          </label>

          <EditableText
            isEditable={this.state.isEditable}
            handleEditable={this.handleEditable}
            onPressEnterKey={this.props.onPressEnterKey}
            updateTodo={this.props.updateTodo}
            todo={this.props.todo}
          />
        </div>
        {!this.state.isEditable ? (
          <div className="imagediv">
            <img
              src="assets/index.png"
              height="20px"
              width="20px"
              onClick={this.handleDelete}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
export default EachTodoItem;
