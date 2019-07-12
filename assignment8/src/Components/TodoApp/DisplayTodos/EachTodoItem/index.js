import React, { Component } from "react";
import "./style.css";
import EditableText from "./EditableText";
class EachTodoItem extends Component {
  constructor(props) {
    super(props);
  }
  handleToggle = () => {
    this.props.tCheckbox(this.props.todo.id);
  };

  handleDelete = () => {
    if (window.confirm("Do you want to delete?"))
      this.props.deleteRow(this.props.todo.id);
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
            updateTodo={this.props.updateTodo}
            todo={this.props.todo}
          />
        </div>
        <div className="imagediv">
          <img
            src="assets/index.png"
            height="20px"
            width="20px"
            className="image"
            onClick={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}
export default EachTodoItem;
