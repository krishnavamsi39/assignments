import React, { Component } from "react";
import EachTodoItem from "./EachTodoItem";
class DisplayTodos extends Component {
  constructor(props) {
    super(props);
  }
  displayEachTodo = () => {
    const rows = [];
    this.props.todoList.forEach(todo => {
      console.log(todo);
      rows.push(
        <EachTodoItem checked={todo.todoCompleted} todoText={todo.todoText} />
      );
    });
    return rows;
  };
  render() {
    return <>{this.displayEachTodo()}</>;
  }
}
export default DisplayTodos;
