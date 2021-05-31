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

export const getKlines = (pair, interval, limit) => async (dispatch) => {
  const response = await binanceAPI.getKlines(pair, interval, limit);
  const averageArr = response.data.map(item => (1 - parseFloat(item[3]) / parseFloat(item[2])));
  const average = averageArr.reduce((a, b) => a + b, 0) / response.data.length;
  const change = ((response.data[response.data.length - 1][4] - response.data[0][1]) / response.data[0][1]) * 100

  dispatch({
    type: ActionTypes.SET_KLINES,
    payload: {
      symbol: pair,
      data: response.data,
      average: average,
      change: change
    }
  })
};

export const getPairsWithKlines = (asset, interval = '5m', limit = 288) => async (dispatch, getState) => {
  return Promise.all(getState().dataFromBinance.exchangeInfo
    .filter(pair => pair.baseAsset === asset)
      .map(async (pair) => {
        return await dispatch(getKlines(pair.symbol, interval, limit))
    }
  ))
};

export const clearPairsAndKlines = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.CLEAR_KLINES,
    payload: []
  })
};
