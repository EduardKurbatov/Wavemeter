import { ActionTypes } from '../constants';

export const setExchangeInfo = (exchangeInfoData) => {
  return {
    type: ActionTypes.GET_EXCHANGE_INFO,
    payload: {exchangeInfoData}
  }
};
