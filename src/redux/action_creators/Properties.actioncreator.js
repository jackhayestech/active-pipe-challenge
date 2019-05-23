import PropertiesActions from '../actions/Properties.actions';
import { LOAD_PROPERTIES } from '../reducers/Properties.reducer'; 

// Loads property data
export const login = () => async (dispatch) => {
  const res = await PropertiesActions.load();

  return (
    dispatch({
      type: LOAD_PROPERTIES,
      data: res,
    })
  );
};