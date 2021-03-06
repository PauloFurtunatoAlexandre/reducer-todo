//initial state
export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
  {
    item: "Learn about advanced react",
    completed: false,
    id: 38952627589,
  },
];

//actions
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

//reducer
export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTask = {
        item: action.payload,
        completed: false,
        id: new Date(),
      };
      return [...state, newTask];
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};
