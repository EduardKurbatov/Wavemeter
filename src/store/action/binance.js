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

export const getWaves = (asset) => async (dispatch, getState) => {
  const pairs = getState().dataFromBinance.exchangeInfo.filter(pair => pair.baseAsset === asset);

  dispatch({
    type: ActionTypes.SET_PAIRS,
    payload: {pairs: pairs}
  })
};

export const getPairsWithKlines = (pair, interval = '1m', limit = 1000) => async (dispatch, getState) => {
  const pairs = await Promise.all(getState().dataFromBinance.pairs.map(async (item) => ({
    symbol: item.symbol,
    klines: (await (binanceAPI.getKlines(item.symbol, interval, limit))).data
  })))

  dispatch({
    type: ActionTypes.SET_ALL_KLINES,
    payload: {pairWithKlines : pairs}
  })
};
