import React, { useState, useReducer } from "react";

import {
  ADD_TODO,
  todoReducer,
  initialState,
} from "../reducers/todoReducer";

import TodoItem from "../todoItem/todo-item.component";

import "./todos.style.scss";

const Todos = () => {
  const [newTodos, setNewTodos] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChange = (e) => {
    setNewTodos(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: newTodos,
    });
    setNewTodos("");
  };

  return (
    <div className="todos-container">
      {console.log(state)}
      <div className="new-task">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="new-todos-input"
            name="newTodos"
            value={newTodos}
            onChange={handleChange}
          />
          <button>Add New Todo</button>
        </form>
      </div>
      <div className="current-todos">
        <ul>
          {state.todos.map((todo) => {
            return (
              <TodoItem
                state={state}
                handleChange={handleChange}
                item={todo.item}
                key={todo.id}
                dispatch={dispatch}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
