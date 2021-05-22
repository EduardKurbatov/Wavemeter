import { ActionTypes } from "../conctants";

export const exchangeDataInfoReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case ActionTypes.GET_EXCHANGE_INFO:
      return {...state, 'exchangeInfoData': payload}
    default:
      return state
  }
};
