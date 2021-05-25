import { ActionTypes } from '../constants';
import { binanceAPI } from '../api/binance';

export const setExchangeInfo = () => async (dispatch) => {
  const response = await binanceAPI.getExchangeInfo();

  if (!response.isError) {
    const exchangeInfo = response.data.symbols.map(item => ({
      baseAsset: item.baseAsset,
      quoteAsset: item.quoteAsset,
      symbol: item.symbol
    }))

    dispatch({
      type: ActionTypes.SET_EXCHANGE_INFO,
      payload: {exchangeInfo}
    })
  };
};

export const setKlines = (pair , interval = '1m', limit) => async (dispatch) => {
  const response = await binanceAPI.getKlines(pair, interval, limit);

  dispatch({
    type: ActionTypes.SET_KLINES,
    payload: {klines: response.data}
  })
};
