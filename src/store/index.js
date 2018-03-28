import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware                  from 'redux-thunk';
import logger                           from 'redux-logger'
import reducers                         from '../reducers';

let middleware = [thunkMiddleware];

if (typeof window !== 'undefined' && module.hot) {
  middleware.push(logger);
}

export default createStore(
  reducers,
  applyMiddleware(...middleware)
);