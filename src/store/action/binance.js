import { ActionTypes } from '../constants';
import { binanceAPI } from '../api/binance';

export const setExchangeInfo = () => async (dispatch) => {
  const response = await binanceAPI.getExchangeInfo();

  dispatch({
    type: ActionTypes.GET_EXCHANGE_INFO,
    payload: {exchangeInfoData: response.data.symbols.map((item) => {
      return {
        baseAsset: item.baseAsset,
        quoteAsset: item.quoteAsset,
        symbol: item.symbol
      }
    })}
  })
};
