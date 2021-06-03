import axios from 'axios';
import { BINANCE_URL }  from '../constants';

export const binanceClient = axios.create({
  baseURL: BINANCE_URL
});

export const handleBinanceResponseSuccess = (response) => {
  return {
    header: response.headers,
    data: response.data,
    isError: false
  }
};

export const handleBinanceResponseError = (error) => {
  return {
      header: error.response?.headers,
      data: error.response?.data,
      isError: true
  }
};
