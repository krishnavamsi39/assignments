import React, { Component } from "react";
import EachTodoItem from "./EachTodoItem";
import TodoActions from "./TodoActions";
import FilterTypes from "./../../../constants/TodoConstants";
class DisplayTodos extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedAction: FilterTypes.all };
  }
  changeAction = action => {
    this.setState({ selectedAction: action });
  };

  displayEachTodo = () => {
    var filteredList = [];
    //TODO:maintain constants for filter types
    if (this.state.selectedAction === FilterTypes.active) {
      filteredList = this.props.todoList.filter(
        todo => todo.todoCompleted === false
      );
    } else if (this.state.selectedAction === FilterTypes.completed) {
      filteredList = this.props.todoList.filter(
        todo => todo.todoCompleted === true
      );
    } else {
      filteredList = this.props.todoList;
    }
    const rows = filteredList.map(todo => {
      return (
        <EachTodoItem
          updateTodo={this.props.updateTodo}
          deleteTodo={this.props.deleteTodo}
          onToggleTaskCompletetion={this.props.onToggleTaskCompletetion}
          todo={todo}
        />
      );
    });

    return rows;
  };
  render() {
    return (
      <>
        {this.displayEachTodo()}
        {this.props.todoList.length > 0 ? (
          <TodoActions
            selectedAction={this.state.selectedAction}
            todoList={this.props.todoList}
            clearCompleted={this.props.clearCompleted}
            changeAction={this.changeAction}
          />
        ) : (
          <></>
        )}
      </>
    );
  }
}
export default DisplayTodos;
