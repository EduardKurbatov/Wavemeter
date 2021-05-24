import { ActionTypes } from '../constants';
import { binanceClient, handleBinanceResponseError, handleBinanceResponseSuccess } from '../api/binanceClient';

export const binanceAPI = {
  getExchangeInfo() {
    return binanceClient.get('/api/v3/exchangeInfo')
      .then(handleBinanceResponseSuccess)
      .catch(handleBinanceResponseError)
  }
};

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
