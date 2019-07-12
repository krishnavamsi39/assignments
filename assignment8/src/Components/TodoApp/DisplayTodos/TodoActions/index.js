import React, { Component } from "react";
import "./style.css";
class TodoActions extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = e => {
    this.props.changeAction(e.target.value);
  };
  handleClear = () => {
    this.props.deleteCompleted();
  };
  render() {
    return (
      <div className="footer">
        <div>
          <input
            type="button"
            class="button"
            value="All"
            onClick={this.handleClick}
          />
          <input
            type="button"
            class="button"
            value="Active"
            onClick={this.handleClick}
          />
          <input
            type="button"
            class="button"
            value="Completed"
            onClick={this.handleClick}
          />
        </div>
        <div class="completed">
          <input
            type="button"
            class="button"
            value="Clear completed"
            onClick={this.handleClear}
          />
        </div>
      </div>
    );
  }
}
export default TodoActions;
