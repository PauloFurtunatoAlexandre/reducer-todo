//initial state
export const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589,
};

//actions
export const ADD_TODO = "ADD_TODO";

//reducer
export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        item: action.payload, 
        completed: false, 
        id: new Date(), 
      };
    default:
      return state;
  }
};
