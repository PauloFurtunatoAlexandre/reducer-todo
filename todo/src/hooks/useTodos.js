import { useState, useReducer } from "react";

export const useTodos = () => {
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
      type: todo.completed ? true : false,
      id: todo.id,
    });
  };

  return [
    handleChange,
    handleSubmit,
    handleCompleted,
    newTodos,
    setNewTodos,
    dispatch,
    state
  ];
};
