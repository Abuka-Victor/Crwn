import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reducer';

// const myLoggerMiddleWare = (store) => (next) => (action) => {
// if (!action.type) {
//      return next(action)
//   }
//   console.log(action.type, action.payload);
//   console.log(store.getState());
//   next(action);
//   console.log(store.getState())
// };

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
