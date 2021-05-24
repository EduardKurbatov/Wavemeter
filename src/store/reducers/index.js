import { combineReducers } from 'redux';
import { binanceReducer } from './exchangeDataInfoReducer';

const reducers = combineReducers({
  dataFromBinance: binanceReducer
});

export default reducers;
