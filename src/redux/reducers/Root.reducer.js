import { combineReducers } from 'redux';

import Ui from './Ui.reducer';
import Properties from './Properties.reducer';

const rootReducer = () => combineReducers({
  Ui,
  Properties,
});

export default rootReducer;
