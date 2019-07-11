import React, { Component } from "react";
import "./style.css";
class EachTodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="eachdiv">
        <input type="checkbox" />
        <p class="message"> {this.props.todoText} </p>
        <img src="assets/index.png" height="20px" width="20px" class="image" />
      </div>
    );
  }
}
export default EachTodoItem;
