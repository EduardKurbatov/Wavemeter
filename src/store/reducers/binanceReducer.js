import { ActionTypes } from "../constants";

const initiallState = {
  exchangeInfo: [],
  klines: []
}

export const binanceReducer = (state = initiallState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_EXCHANGE_INFO:
      return {...state, ...payload};
    case ActionTypes.SET_ALL_KLINES:
      return {...state, klines: [...state.klines, payload]};
    case ActionTypes.CLEAR_ALL_KLINES:
      return {...state, klines: payload};
    default:
      return state;
  };
};
