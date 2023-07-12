import {
  GET_INVOICE,
    GET_TRANSACTIONS_ERROR,
    GET_TRANSACTIONS_LIST
  } from '../actions/types';

  const initialState = [];

  export default function transactons(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_TRANSACTIONS_LIST:
        return [...state, payload];
      case GET_TRANSACTIONS_ERROR:
        return [...state, payload];
      case GET_INVOICE:
        return [...state,payload]
      default:
        return state;
    }
  }
  