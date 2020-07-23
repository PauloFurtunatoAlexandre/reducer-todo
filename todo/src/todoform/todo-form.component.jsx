import React from "react";

const TodoForm = (props) => {
  return (
    <form onSubmit={props.newTodoSubmit}>
      <input
        type="text"
        name="newTodo"
        value={props.newTodo}
        onChange={props.handleChanges}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;