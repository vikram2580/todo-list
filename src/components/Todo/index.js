import React, { Component } from "react";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: "",
    };
  }
  addTodo = (task) => {
    this.setState((prev) => {
      return {
        todos: [...prev.todos, task],
        newTodo: "",
      };
    });
  };
  handleInputChange = (event) => {
    this.setState({ newTodo: event?.target?.value });
  };
  handleAddTodo = () => {
    if (this.state.newTodo?.trim() === "") return;
    this.addTodo(this.state.newTodo);
  };
  removeTodo = (index) => {
    const updateTodos = [...this.state.todos];
    updateTodos?.splice(index, 1);
    console.log("dafadfadf", updateTodos);
    this.setState({ todos: updateTodos });
  };

  render() {
    return (
      <div style={{ textAlign: "center", color: "darkblue" }}>
        <h1>My To-Do List</h1>
        <div style={{ textAlign: "center" }}>
          <input
            type='text'
            placeholder='Add a new task'
            style={{ padding: "5px" }}
            onChange={this.handleInputChange}
            value={this.state.newTodo}
          />
          <button
            style={{
              backgroundColor: "darkblue",
              color: "white",
              padding: "5px 10px",
              border: "none",
              marginLeft: "5px",
            }}
            onClick={this.handleAddTodo}
          >
            Add
          </button>
        </div>
        <div>
        <ul style={{ listStyleType: "none", paddingLeft: "20px" }}>
          {/* Task items will be added here */}
          {this.state.todos?.map((item, index) => (
            <li key={index} style={{ padding: "5px" }}>
              {item}
              <button
                
                style={{
                  backgroundColor: "darkblue",
                  color: "white",
                  padding: "5px 10px",
                  border: "none",
                  marginLeft: "5px",
                }}
                onClick={() => {
                  this.removeTodo(index);
                  console.log("tjisjfdij");
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        </div>
      </div>
    );
  }
}

export default Todo;
