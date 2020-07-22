import React, { useState, useReducer } from "react";

import { todoReducer, initialState, ADD_TODO } from "../reducers/todoReducer";

import "./todos.style.scss";

const Todos = () => {
  const [newTodos, setNewTodos] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChange = (e) => {
    setNewTodos(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="todos-container">
      <div className="new-task">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="new-todos-input"
            name="newTodos"
            value={newTodos}
            onChange={handleChange}
          />
          <button
            onClick={() =>
              dispatch({
                type: ADD_TODO,
                payload: newTodos,
              })
            }
          >
            Add New Todo
          </button>
        </form>
      </div>
      <div className="current-todos">{state.item}</div>
    </div>
  );
};

export default Todos;
