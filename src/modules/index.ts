import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

function checkSuccess(result: any) {
  return result && result.res_code === 1;
}

function getPayLoad(result: any) {
  return result && result.data;
}

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [reduxPromise.withExtraArgument({ checkSuccess , getPayLoad})];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer),
  );

  return store;
}
