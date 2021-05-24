import { ActionTypes } from '../constants';
import { binanceAPI } from '../api/binance';

export const setExchangeInfo = () => async (dispatch) => {
  const response = await binanceAPI.getExchangeInfo();

  if (!response.isError) {
    const exchangeInfoData = response.data.symbols.map(item => ({
      baseAsset: item.baseAsset,
      quoteAsset: item.quoteAsset,
      symbol: item.symbol
    }))

    dispatch({
      type: ActionTypes.GET_EXCHANGE_INFO,
      payload: {exchangeInfoData}
    })
  };
};

export const setKlines = () => async (dispatch) => {
  const response = await binanceAPI.getKlines();

  if (!response.isError) {
    const klines = response.data.map(item => {
      return item
    })

    dispatch({
      type: ActionTypes.GET_KLINES,
      payload: {klines}
    })
  }
}
