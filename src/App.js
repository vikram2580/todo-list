import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";


class App extends Component {
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
        todos: [...prev.todos, ,prev.newTodo],
        newTodo: "",
      };
    });
  };
  handleInputChange = (event) => {
    this.setState({ newTodo: event?.target?.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.newTodo?.trim() === "") return;
    // this.addTodo(this.state.newTodo);
    this.setState((prev) => {
      return {
        todos: [...prev.todos, prev.newTodo],
        newTodo: "",
      };
    });
  };
  removeTodo = (index) => {
    const updateTodos = [...this.state.todos];
    updateTodos?.splice(index, 1);
    console.log("dafadfadf", updateTodos);
    this.setState({ todos: updateTodos });
  };

  render() {
  console.log(this.state.todos)

    return (
      <div className='App'>
        <Todo />
      </div>
    );
  }
}

export default App;
