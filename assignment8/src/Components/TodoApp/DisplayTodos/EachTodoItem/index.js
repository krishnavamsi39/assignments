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
    this.props.deleteRow(this.props.todo.id);
  };
  render() {
    return (
      <div className="eachdiv">
        <input type="checkbox" class="check" onClick={this.handleToggle} />
        {this.handleMessage()}
        <img
          src="assets/index.png"
          height="20px"
          width="20px"
          className="image"
          onClick={this.handleDelete}
        />
      </div>
    );
  }
}
export default EachTodoItem;
