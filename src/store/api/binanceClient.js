import axios from 'axios';
import { BINANCE_URL }  from '../conctants';

export const binanceClient = axios.create({
  baseURL: BINANCE_URL
});
