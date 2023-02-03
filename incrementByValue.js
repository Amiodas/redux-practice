const { createStore } = require("redux");

// Constant Initialize
const INCREMENT = "INCREMENT";

// 1. state
const intialState = {
  count: 0,
};

// 2. action
const incrementByValue = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

// 3. Reducer

const incrementCountReducer = (state = intialState, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      count: state.count + action.payload,
    };
  }
};

// 4. store
const store = createStore(incrementCountReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementByValue(5));
store.dispatch(incrementByValue(10));
store.dispatch(incrementByValue(10));
