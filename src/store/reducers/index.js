import { combineReducers } from 'redux';
import { exchangeDataInfoReducer } from './exchangeDataInfoReducer';

const reducers = combineReducers({
  dataFromBinance: exchangeDataInfoReducer
});

export default reducers;
