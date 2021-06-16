import { ActionTypes, BINANCE_PAIR_ACTIVE_STATUSES } from '../constants';
import { binanceAPI } from '../api/binance';

export const setExchangeInfo = () => async (dispatch) => {
  const response = await binanceAPI.getExchangeInfo();

  if (!response.isError) {
    const exchangeInfo = response.data.symbols.filter(item => BINANCE_PAIR_ACTIVE_STATUSES.includes(item.status)).map(item => ({
      baseAsset: item.baseAsset,
      quoteAsset: item.quoteAsset,
      symbol: item.symbol,
    }))

    dispatch({
      type: ActionTypes.SET_EXCHANGE_INFO,
      payload: {exchangeInfo}
    })
  };
};

export const getKlines = (pair, interval, limit) => async (dispatch) => {
  const response = await binanceAPI.getKlines(pair, interval, limit);
  const lifeTime = await (await binanceAPI.getKlines(pair, '1d', 1000)).data.length
  if (!response.isError) {
    const firsElement = response.data[0][1];
    const lastElement = response.data[response.data.length - 1][1];
    const change = ((lastElement - firsElement) / firsElement) * 100;
    const average = response.data.reduce((acc, curr) => acc + (1 - parseFloat(curr[3]) / parseFloat(curr[2])), 0) / response.data.length * 100;

      dispatch({
        type: ActionTypes.SET_KLINES,
        payload: {
          symbol: pair,
          data: response.data,
          average: average.toFixed(5),
          change: change.toFixed(2),
          lifeTime: lifeTime
        }
      })
  }
};

export const getPairsWithKlines = (asset, interval, limit) => async (dispatch, getState) => {
  return Promise.all(getState().dataFromBinance.exchangeInfo
    .filter(pair => [pair.quoteAsset, pair.baseAsset].includes(asset))
        .map(async (pair) => await dispatch(getKlines(pair.symbol, interval, limit))
  ))
};

export const clearPairsAndKlines = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.CLEAR_KLINES,
    payload: []
  })
};
