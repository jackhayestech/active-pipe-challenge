import PropertiesActions from '../actions/Properties.actions';
import { LOAD_PROPERTIES } from '../reducers/Properties.reducer'; 
import { TOGGLE_LOADING_DISPLAY, SET_ALERT_MESSAGE } from '../reducers/Ui.reducer'

// Loads property data
export const loadProperties = () => async (dispatch) => {
  const res = await PropertiesActions.load();

  // Turn off the loading state
  dispatch({
    type: TOGGLE_LOADING_DISPLAY,
    data: false,
  })

  // An error occured
  if ('error' in res) {
    return (
      dispatch({
        type: SET_ALERT_MESSAGE,
        data: {
          display: true,
          type: 'error',
        },
      })
    );
  }

  return (
    dispatch({
      type: LOAD_PROPERTIES,
      data: res,
    })
  );
};
