import { binanceClient, handleBinanceResponseSuccess, handleBinanceResponseError } from './binanceClient';

export const binanceAPI = {
  getExchangeInfo() {
    return binanceClient.get('/api/v3/exchangeInfo')
      .then(handleBinanceResponseSuccess)
      .catch(handleBinanceResponseError)
  },


  getKlines() {
    return binanceClient.get('/api/v3/klines', {params: {
      symbol: 'DOGEBUSD',
      interval: '1m',
      endTime: 1621339063228,
      limit: 1000
    }})
      .then(handleBinanceResponseSuccess)
      .catch(handleBinanceResponseError)
  }
};
