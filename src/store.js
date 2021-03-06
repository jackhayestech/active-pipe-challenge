import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from './redux/reducers/Root.reducer';

/*
*
*/
const middlewareCompose = compose(
  applyMiddleware(
    thunk,
  ),
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  createRootReducer(),
  composeEnhancers(middlewareCompose),
);

export default store;
