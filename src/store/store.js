import {applyMiddleware, compose, createStore} from 'redux';
import reducers from './reducers/index';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(
  applyMiddleware(
    thunkMiddleware,
  )
));

export default store;
