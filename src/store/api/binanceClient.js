import axios from 'axios';
import { BINANCE_URL }  from '../constants';
import { setExchangeInfo } from '../action/binance';

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
