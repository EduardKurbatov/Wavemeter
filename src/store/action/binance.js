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
  if (!response.isError) {
    const firsElement = response.data[0][1];
    const lastelement = response.data[response.data.length - 1][4];
    const change = ((lastelement - firsElement) / firsElement) * 100;
    const average = response.data.reduce((acc, curr) => acc + (1 - parseFloat(curr[3]) / parseFloat(curr[2])), 0) / response.data.length * 100;

    dispatch({
      type: ActionTypes.SET_KLINES,
      payload: {
        symbol: pair,
        dsta: response.data,
        average: average.toFixed(5),
        change: change.toFixed(2)
      }
    })
    console.log(response.header['x-mbx-used-weight-1m']);
  }
};

export const getPairsWithKlines = (asset, interval = '1m', limit = 1000) => async (dispatch, getState) => {
  return Promise.all(getState().dataFromBinance.exchangeInfo
    .filter(pair => [pair.quoteAsset, pair.baseAsset].includes(asset))
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
