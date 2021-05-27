import { binanceClient, handleBinanceResponseSuccess, handleBinanceResponseError } from './binanceClient';

export const binanceAPI = {
  getExchangeInfo() {
    return binanceClient.get('/api/v3/exchangeInfo')
      .then(handleBinanceResponseSuccess)
      .catch(handleBinanceResponseError)
  },

  getKlines(pair, interval, limit) {
    return binanceClient.get('/api/v3/klines', {params: {
      symbol: pair,
      interval: interval,
      limit: limit
    }})
      .then(handleBinanceResponseSuccess)
      .catch(handleBinanceResponseError)
  }
};
