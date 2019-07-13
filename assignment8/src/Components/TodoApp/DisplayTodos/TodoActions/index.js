import React, { Component } from "react";
import "./style.css";
import FilterTypes from "./../../../../constants/TodoConstants";
class TodoActions extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = e => {
    this.props.changeAction(e.target.value);
  };
  displayButtons = () => {
    var allclass = "button";
    var activeclass = "button";
    var completedclass = "button";
    if (this.props.selectedAction === FilterTypes.all)
      var allclass = "clicked-button";
    else if (this.props.selectedAction === FilterTypes.active)
      var activeclass = "clicked-button";
    else var completedclass = "clicked-button";
    return (
      <div>
        <input
          type="button"
          className={allclass}
          value="All"
          onClick={this.handleClick}
        />
        <input
          type="button"
          className={activeclass}
          value="Active"
          onClick={this.handleClick}
        />
        <input
          type="button"
          className={completedclass}
          value="Completed"
          onClick={this.handleClick}
        />
      </div>
    );
  };
  displayClearButton = () => {
    let c = 0;
    const todos = this.props.todoList;
    todos.map(todo => {
      if (todo.todoCompleted) c += 1;
    });
    if (c > 0)
      return (
        <div class="completed">
          <input
            type="button"
            className="button"
            value="Clear completed"
            onClick={this.props.clearCompleted}
          />
        </div>
      );
  };
  itemCount = () => {
    let c = 0;
    const todos = this.props.todoList;
    todos.map(todo => {
      if (!todo.todoCompleted) c += 1;
    });
    return <span className="item-count">{c} Items left</span>;
  };
  render() {
    return (
      <div className="footer">
        {this.itemCount()}
        {this.displayButtons()}
        {this.displayClearButton()}
      </div>
    );
  }
}
export default TodoActions;
