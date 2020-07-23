export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
];

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now(),
      };
      return [...state, newTodo];
    }

    case TOGGLE_COMPLETED: {
      return state.map((todo) =>
        todo.id === action.id ? {...todo, completed: !todo.completed} : todo
      );
    }

    case CLEAR_COMPLETED: {
      return state.filter((todo) => !todo.completed);
    }

    default:
      return state;
  }
};