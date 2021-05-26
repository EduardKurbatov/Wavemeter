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


export const getPairsWithKlines = (asset, interval = '1m', limit = 1000) => async (dispatch, getState) => {
  const pairsWithKlines = await Promise.all(getState().dataFromBinance.exchangeInfo
    .filter(pair => pair.baseAsset === asset)
      .map(async (pair) => {
        return {
          symbol: pair.symbol,
          klines: (await binanceAPI.getKlines(pair.symbol, interval, limit)).data
        }
  }));

  dispatch({
    type: ActionTypes.SET_ALL_KLINES,
    payload: {pairsWithKlines}
  })
};
