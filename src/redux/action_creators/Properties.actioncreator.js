import PropertiesActions from '../actions/Properties.actions';
import { LOAD_PROPERTIES } from '../reducers/Properties.reducer'; 
import { TOGGLE_LOADING_DISPLAY } from '../reducers/Ui.reducer'

// Loads property data
export const loadProperties = () => async (dispatch) => {
  const res = await PropertiesActions.load();

  dispatch({
    type: TOGGLE_LOADING_DISPLAY,
    data: false,
  })

  return (
    dispatch({
      type: LOAD_PROPERTIES,
      data: res,
    })
  );
};