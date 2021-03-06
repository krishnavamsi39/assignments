import React, { Component } from "react";
import AddTodo from "./AddTodo";
import DisplayTodos from "./DisplayTodos";
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.random = 0;
    this.state = { todoList: [] };
  }
  updateEachTodo = (id, message) => {
    const todos = this.state.todoList;
    todos.some(todo => {
      if (todo.id === id) todo.todoText = message;
    });
    this.setState({
      todoList: todos
    });
  };
  onAddTodo = message => {
    let obj = { todoCompleted: false, todoText: message, id: this.random + 1 };
    this.random = this.random + 1;
    const todos = this.state.todoList;
    todos.push(obj);
    this.setState({
      todoList: todos
    });
  };
  onToggleTaskCompletetion = id => {
    const todos = this.state.todoList;

    todos.some(todo => {
      if (todo.id === id) todo.todoCompleted = !todo.todoCompleted;
    });
    this.setState({
      todoList: todos
    });
  };
  clearCompleted = () => {
    const todos = this.state.todoList;
    this.setState({
      todoList: todos.filter(obj => obj.todoCompleted === false)
    });
  };
  deleteTodo = id => {
    this.setState({
      todoList: this.state.todoList.filter(obj => obj.id !== id)
    });
  };
  render() {
    return (
      <div class="todo">
        <AddTodo
          onPressEnterKey={this.onAddTodo}
          TextClass="enter-text"
          TodoTextValue=""
        />

        <DisplayTodos
          onPressEnterKey={this.updateEachTodo}
          clearCompleted={this.clearCompleted}
          onToggleTaskCompletetion={this.onToggleTaskCompletetion}
          todoList={this.state.todoList}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}
export default TodoApp;
