const { createStore } = require("redux");

// Constant Initialize
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// 4 step must follow redux
// 1. state
// 2. actions
// 3. reducer
// 4. store

// state
const initalCounterState = {
  count: 0,
};

// action
// INCREMENT
// DECREMENT
// action is an object - action contains two important things (type & payloads)
// Type denotes - what type of action do I have? and its must be written in "STRING"
// Payloads used for pass data
// we must create an action creator

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

// create reducer
// Reducer is a function is a pure function
// a function must take a input and give a return value
// reducer's work is to handle all logic and update the state
// reducer update state on action type

// create reducer for counter
const counterReducer = (state = initalCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        // use spread operator to get multiple value of a state
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      state;
  }
};

// create store
// store used for hold state into store
// store have 3 important methods. They are - getState(), dispatch(), subscribe()

// create store

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// dispatch method
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
