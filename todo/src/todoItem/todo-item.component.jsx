import React from "react";

import "./todo-item.style.scss";

import { TOGGLE_COMPLETED, dispatch } from "../reducers/todoReducer";

const TodoItem = ({ handleChange, key, item, dispatch }) => {
  const handleCompleted = (key) => {
    dispatch({
      type: TOGGLE_COMPLETED,
      id: key,
    });
  };
  return (
    <div className="todo-item-body">
      <li>
        <input
          key={key}
          item={item}
          type="checkbox"
          handleChange={handleChange}
          onClick={handleCompleted}
        />
        <span
        // style={{ textDecoration: completed ? "line-through" : "none" }}
        ></span>
      </li>
    </div>
  );
};

export default TodoItem;
