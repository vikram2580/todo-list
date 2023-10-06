import React from "react";

const Todo = () => {
  return (
    <div style={{ textAlign: "center", color: "darkblue" }}>
      <h1>My To-Do List</h1>
      <div style={{ textAlign: "center" }}>
        <input
          type='text'
          placeholder='Add a new task'
          style={{ padding: "5px" }}
        />
        <button
          style={{
            backgroundColor: "darkblue",
            color: "white",
            padding: "5px 10px",
            border: "none",
            marginLeft: "5px",
          }}
        >
          Add
        </button>
      </div>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
        {/* Task items will be added here */}
      </ul>
    </div>
  );
};

export default Todo;
