import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

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
  whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [
  process.env.NODE_ENV === 'development' && logger,
  sagaMiddleware,
  // thunk,
].filter(Boolean);

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

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
