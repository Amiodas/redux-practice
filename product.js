const { createStore, combineReducers } = require("redux");
// constant initailaize
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";

// 1. state
const initailProductState = {
  products: ["Sugar"],
  numberOfProduct: 1,
};

// cart state
const cartInitialState = {
  cart: ["sugar"],
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

// cart action
const getCart = () => {
  return {
    type: GET_CART,
  };
};

const addCart = (payload) => {
  return {
    type: ADD_CART,
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

// Cart Reducer
const cartReducer = (state = initailProductState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
      };
    case ADD_CART:
      return {
        prducts: [...state.cart, action.payload],
        numberOfProduct: state.numberOfProduct + 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});
// 4. store
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addProduct("Oil"));
store.dispatch(getProduct());
store.dispatch(getCart());
