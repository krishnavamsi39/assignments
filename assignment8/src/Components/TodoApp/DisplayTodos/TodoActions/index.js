import React, { Component } from "react";
import "./style.css";
class TodoActions extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = e => {
    this.props.changeAction(e.target.value);
  };
  displayClear = () => {
    var c = 0;
    var list = this.props.todoList;
    for (var i = 0; i < list.length; i++) {
      if (list[i].todoCompleted === true) {
        c += 1;
      }
    }
    if (c > 0)
      return (
        <div class="completed">
          <input
            type="button"
            class="button"
            value="Clear completed"
            onClick={this.props.clearCheck}
          />
        </div>
      );
  };
  itemCount = () => {
    var c = 0;
    var list = this.props.todoList;
    for (var i = 0; i < list.length; i++) {
      if (list[i].todoCompleted === false) {
        c += 1;
      }
    }
    return <span class="span">{c} Items left</span>;
  };
  render() {
    return (
      <div className="footer">
        {this.itemCount()}
        <div>
          <input
            type="button"
            class="button"
            value="All"
            onClick={this.handleClick}
          />
          <input
            type="button"
            class="button"
            value="Active"
            onClick={this.handleClick}
          />
          <input
            type="button"
            class="button"
            value="Completed"
            onClick={this.handleClick}
          />
        </div>
        {this.displayClear()}
      </div>
    );
  }
}
export default TodoActions;
