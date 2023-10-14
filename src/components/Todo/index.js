import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const handleInputChange = (event) => {
    setNewTodo(event?.target?.value);
  };
  const handleAddTodo = () => {
    if (newTodo?.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const removeTodo = (index) => {
    const updateTodos = [...todos];
    updateTodos?.splice(index, 1);
    setTodos(updateTodos);
  };

  return (
    <div style={{ textAlign: "center", color: "darkblue" }}>
      <h1>My To-Do List using React hook</h1>
      <div style={{ textAlign: "center" }}>
        <input
          type='text'
          placeholder='Add a new task'
          style={{ padding: "5px" }}
          onChange={handleInputChange}
          value={newTodo}
        />
        <button
          style={{
            backgroundColor: "darkblue",
            color: "white",
            padding: "5px 10px",
            border: "none",
            marginLeft: "5px",
          }}
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <div>
        <ul style={{ listStyleType: "none", paddingLeft: "20px" }}>
          {/* Task items will be added here */}
          {todos?.map((item, index) => (
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
                  removeTodo(index);
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
};

export default Todo;
