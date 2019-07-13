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

  displayEachTodo = () => {
    const rows = [];
    this.props.todoList.map(todo => {
      if (this.state.actions === "Active") {
        if (todo.todoCompleted) return;
        else
          rows.push(
            <EachTodoItem
              updateTodo={this.props.updateTodo}
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
              updateTodo={this.props.updateTodo}
              deleteRow={this.props.deleteRow}
              tCheckbox={this.props.toggleCheckbox}
              todo={todo}
            />
          );
      } else {
        rows.push(
          <EachTodoItem
            updateTodo={this.props.updateTodo}
            deleteRow={this.props.deleteRow}
            tCheckbox={this.props.toggleCheckbox}
            todo={todo}
          />
        );
      }
    });
    if (this.props.todoList.length > 0)
      rows.push(
        <TodoActions
          selectedAction={this.state.actions}
          todoList={this.props.todoList}
          clearCheck={this.props.clearCheck}
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
