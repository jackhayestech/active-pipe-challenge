import { combineReducers } from 'redux';
import Properties from './properties.reducer';

const rootReducer = () => combineReducers({
  Properties,
});

export default rootReducer;
