import React from "react";

import "./new-todo.style.scss";

import { ADD_TODO } from "../reducers/todoReducer";

const NewTodo = ({ newTodos, handleChange, handleSubmit, dispatch }) => {
  return (
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
  );
};

export default NewTodo;
