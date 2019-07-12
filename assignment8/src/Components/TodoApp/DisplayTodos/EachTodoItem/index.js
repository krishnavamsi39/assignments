import React, { Component } from "react";
import "./style.css";
import { tsImportEqualsDeclaration } from "@babel/types";
class EachTodoItem extends Component {
  constructor(props) {
    super(props);
  }
  handleToggle = () => {
    this.props.tCheckbox(this.props.todo.id);
  };
  handleMessage = () => {
    if (this.props.todo.todoCompleted)
      return <strike className="message">{this.props.todo.todoText}</strike>;
    else return <span className="message"> {this.props.todo.todoText} </span>;
  };
  handleDelete = () => {
    if (window.confirm("Do you want to delete?"))
      this.props.deleteRow(this.props.todo.id);
  };
  render() {
    return (
      <div className="eachdiv">
        <div className="checkandmessage">
          <input
            type="checkbox"
            checked={this.props.todo.todoCompleted}
            onClick={this.handleToggle}
          />
          {this.handleMessage()}
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
