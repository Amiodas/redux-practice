const { createStore } = require("redux");
// constant
const ADD_USER = "ADD_USER";

// 1. store
const initialState = {
  user: ["Jack"],
};

// 2. action
const addUser = (payload) => {
  return {
    type: ADD_USER,
    payload: payload,
  };
};

// 3. reducer
const addUserReducer = (state = initialState, action) => {
  if (action.type === ADD_USER) {
    return {
      user: [...state.user, action.payload],
    };
  }
};

// 4. store
const store = createStore(addUserReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser("Jhon"));
store.dispatch(addUser("Khali"));
