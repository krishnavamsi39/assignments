import React, { Component } from "react";
import AddTodo from "./AddTodo";
import DisplayTodos from "./DisplayTodos";
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.random = 0;
    this.state = { todoList: [] };
  }
  updateEachTodo = (message, id) => {
    var i;
    console.log(message);
    const todos = this.state.todoList;
    for (i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
        var obj = todos[i];
        break;
      }
    }

    obj.todoText = message;
    this.setState({
      todoList: todos
    });
  };
  updateTodoList = message => {
    var obj = { todoCompleted: false, todoText: message, id: this.random + 1 };
    this.random = this.random + 1;
    const todos = this.state.todoList;
    todos.push(obj);
    this.setState({
      todoList: todos
    });
  };
  toggleCheckbox = id => {
    var i;
    const todos = this.state.todoList;
    for (i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
        var obj = todos[i];
        break;
      }
    }
    obj.todoCompleted = !obj.todoCompleted;
    todos[i] = obj;
    this.setState({
      todoList: todos
    });
  };
  clearCheck = () => {
    const todos = this.state.todoList;
    const newtodos = [];
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].todoCompleted == false) {
        newtodos.push(todos[i]);
      }
    }
    this.setState({
      todoList: newtodos
    });
  };
  deleteRow = id => {
    var i;
    const todos = this.state.todoList;
    for (i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
        var obj = todos[i];
        break;
      }
    }
    todos.splice(i, 1);
    this.setState({
      todoList: todos
    });
  };
  render() {
    return (
      <>
        <AddTodo updateTodo={this.updateTodoList} />
        <DisplayTodos
          updateTodo={this.updateEachTodo}
          clearCheck={this.clearCheck}
          toggleCheckbox={this.toggleCheckbox}
          todoList={this.state.todoList}
          deleteRow={this.deleteRow}
        />
      </>
    );
  }
}
export default TodoApp;
