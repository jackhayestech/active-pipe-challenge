import { SET_FILTER } from '../reducers/Ui.reducer';

// Loads property data
export const setFilter = filter => (dispatch) => (
  dispatch({
    type: SET_FILTER,
    data: filter,
  })
);