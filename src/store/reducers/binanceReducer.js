import { ActionTypes } from "../constants";

export const binanceReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case ActionTypes.GET_EXCHANGE_INFO:
      return {...state, ...payload}
    case ActionTypes.GET_KLINES:
      return {...state, ...payload}
    default:
      return state
  }
};
