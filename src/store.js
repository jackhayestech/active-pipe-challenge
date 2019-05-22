import { createStore, applyMiddleware, compose } from 'redux';
import createRootReducer from './redux/reducers/root.reducer';

/*
*
*/
const middlewareCompose = compose(
  applyMiddleware(),
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  createRootReducer(),
  composeEnhancers(middlewareCompose),
);

export default store;
