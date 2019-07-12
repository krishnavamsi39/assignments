import React, { Component } from "react";
import EachTodoItem from "./EachTodoItem";
import TodoActions from "./TodoActions";
class DisplayTodos extends Component {
  constructor(props) {
    super(props);
    this.state = { actions: "All" };
  }
  changeAction = action => {
    this.setState({ actions: action });
  };
  deleteCompleted = () => {
    var copy = this.props.todoList;
    for (var i = 0; i < copy.length; i++) {
      if (copy[i].todoCompleted === true) {
        this.props.deleteRow(copy[i].id);
      }
    }
  };
  displayEachTodo = () => {
    const rows = [];
    this.props.todoList.map(todo => {
      if (this.state.actions === "Active") {
        if (todo.todoCompleted) return;
        else
          rows.push(
            <EachTodoItem
              deleteRow={this.props.deleteRow}
              tCheckbox={this.props.toggleCheckbox}
              todo={todo}
            />
          );
      } else if (this.state.actions === "Completed") {
        if (todo.todoCompleted === false) return;
        else
          rows.push(
            <EachTodoItem
              deleteRow={this.props.deleteRow}
              tCheckbox={this.props.toggleCheckbox}
              todo={todo}
            />
          );
      } else {
        rows.push(
          <EachTodoItem
            deleteRow={this.props.deleteRow}
            tCheckbox={this.props.toggleCheckbox}
            todo={todo}
          />
        );
      }
    });
    rows.push(
      <TodoActions
        deleteCompleted={this.deleteCompleted}
        changeAction={this.changeAction}
      />
    );
    return rows;
  };
  render() {
    return <>{this.displayEachTodo()}</>;
  }
}
export default DisplayTodos;
