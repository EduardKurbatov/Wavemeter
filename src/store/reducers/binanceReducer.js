import { ActionTypes } from "../constants";

export const binanceReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_EXCHANGE_INFO:
      return {...state, ...payload}
    case ActionTypes.SET_PAIRS:
      return {...state, ...payload}
    case ActionTypes.SET_ALL_KLINES:
      return {...state, ...payload}
    default:
      return state
  };
};
