import React, { useState, useReducer } from "react";
import {
  todoReducer,
  initialState,
  ADD_TODO,
  TOGGLE_COMPLETED,
  CLEAR_COMPLETED,
} from "../reducers/todoReducer";

import TodoForm from "../todoform/todo-form.component";
import TodoItem from "../todoItem/todo-item.component";

const Todos = () => {
  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };

  const newTodoSubmit = (e) => {
    e.preventDefault();

    if (newTodo.length > 3) {
      dispatch({
        type: ADD_TODO,
        payload: newTodo,
      });
    }

    setNewTodo("");
  };

  return (
    <div>
      <TodoForm
        handleChanges={handleChanges}
        newTodoSubmit={newTodoSubmit}
        newTodo={newTodo}
      />

      {state.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            completed={todo.completed}
            itemCompleted={() => {
              dispatch({
                type: TOGGLE_COMPLETED,
                id: todo.id,
              });
            }}
          />
        );
      })}

      <button onClick={() => dispatch({ type: CLEAR_COMPLETED })}>
        Clear Completed
      </button>
    </div>
  );
};

export default Todos;
