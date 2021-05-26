import { combineReducers } from 'redux';
import { binanceReducer } from './binanceReducer';

const reducers = combineReducers({
  dataFromBinance: binanceReducer, 
});

export default reducers;
