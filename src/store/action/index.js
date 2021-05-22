import { ActionTypes } from '../conctants';

export const setExchangeInfo = (data) => {
  return {
    type: ActionTypes.GET_EXCHANGE_INFO,
    payload: data
  }
};
