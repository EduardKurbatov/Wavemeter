import axios from 'axios';
import { BINANCE_URL }  from '../constants';
import { setExchangeInfo } from '../action/index';

export const binanceClient = axios.create({
  baseURL: BINANCE_URL
});

export const handleBinanceResponseSuccess = (response) => {
  return {
    data: response.data,
    isError: false
  }
};

export const handleBinanceResponseError = (error) => {
  return {
      data: error.response?.data,
      isError: true
  }
};

export const getExchangeInfo = (dispatch) => {
  return binanceClient.get(BINANCE_URL)
    .then(handleBinanceResponseSuccess)
      .then((response) => {
        dispatch(setExchangeInfo(response.data.symbols.map((item) => {
          return {
            baseAsset: item.baseAsset,
            quoteAsset: item.quoteAsset,
            symbol: item.symbol
          }
        })))
      })
    .catch(handleBinanceResponseError)
};
