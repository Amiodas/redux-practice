const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
// constant initailaize
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

// 1. state
const initailProductState = {
  products: ["Sugar"],
  numberOfProduct: 1,
};

// 2. action
const getProduct = () => {
  return {
    type: GET_PRODUCT,
  };
};

const addProduct = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload: payload,
  };
};

// 3. Product reducer
const productReducer = (state = initailProductState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        prducts: [...state.products, action.payload],
        numberOfProduct: state.numberOfProduct + 1,
      };
    default:
      return state;
  }
};

// 4. store
const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProduct());
store.dispatch(addProduct("Oil"));
store.dispatch(getProduct());
