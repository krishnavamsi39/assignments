import React, { Component } from "react";
import EachTodoItem from "./EachTodoItem";
class DisplayTodos extends Component {
  constructor(props) {
    super(props);
  }
  displayEachTodo = () => {
    const rows = [];
    this.props.todoList.map(todo => {
      rows.push(<EachTodoItem todo={todo} />);
    });
    return rows;
  };
  render() {
    return <>{this.displayEachTodo()}</>;
  }
}
export default DisplayTodos;
