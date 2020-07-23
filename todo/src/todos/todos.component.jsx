import React, { useState, useReducer } from "react";

import { ADD_TODO, TOGGLE_COMPLETED, todoReducer, initialState } from "../reducers/todoReducer";

import "./todos.style.scss";

const Todos = () => {
  const [newTodos, setNewTodos] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChange = (e) => {
    setNewTodos(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTodos("");
  };

  const handleCompleted = (todo) => {
    dispatch({
      type: TOGGLE_COMPLETED,
      id: todo.id,
    });
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
      <div className="current-todos">
        <ul>
          {state.map((todo) => {
            return (
              <li key={todo.id} onClick={handleCompleted}>
                {todo.item}
              </li>
            );
          })}
        </ul>
        {console.log(state)}
      </div>
    </div>
  );
};

export default Todos;
