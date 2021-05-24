import { binanceClient, handleBinanceResponseSuccess, handleBinanceResponseError } from './binanceClient';

export const binanceAPI = {
  getExchangeInfo() {
    return binanceClient.get('/api/v3/exchangeInfo')
      .then(handleBinanceResponseSuccess)
      .catch(handleBinanceResponseError)
  }
};
