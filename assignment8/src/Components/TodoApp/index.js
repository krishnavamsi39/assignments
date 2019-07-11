import React, { Component } from "react";
import AddTodo from "./AddTodo";
import DisplayTodos from "./DisplayTodos";
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.random = 0;
    this.list = [];
    this.state = { todoList: [] };
  }
  updateTodoList = message => {
    var obj = { todoCompleted: false, todoText: message, id: this.random + 1 };
    this.random = this.random + 1;
    const todos = this.state.todoList;
    todos.push(obj);
    this.setState({
      todoList: todos
    });
    console.log(this.state.todoList);
  };
  render() {
    return (
      <>
        <AddTodo updateTodo={this.updateTodoList} />
        <DisplayTodos todoList={this.state.todoList} />
      </>
    );
  }
}
export default TodoApp;
