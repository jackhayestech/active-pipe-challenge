import { SET_FILTER, SET_ALERT_MESSAGE, TOGGLE_LOADING_DISPLAY } from '../reducers/Ui.reducer';

export const toggleLoading = display => (dispatch) => (
  dispatch({
    type: TOGGLE_LOADING_DISPLAY,
    data: display,
  })
)

export const setAlert = alert => (dispatch) => (
  dispatch({
    type: SET_ALERT_MESSAGE,
    data: alert,
  })
);

// Loads property data
export const setFilter = filter => (dispatch) => (
  dispatch({
    type: SET_FILTER,
    data: filter,
  })
);