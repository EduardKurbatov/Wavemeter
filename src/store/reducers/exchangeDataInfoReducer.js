import { ActionTypes } from "../constants";

export const exchangeDataInfoReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case ActionTypes.GET_EXCHANGE_INFO:
      return {...state, ...payload}
    default:
      return state
  }
};
