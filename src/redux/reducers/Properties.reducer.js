const initialState = null;

export const LOAD_PROPERTIES = 'LOAD_PROPERTIES';

const Properties = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROPERTIES:
      return action.data;
    default:
      return state;
  }
};

export default Properties;
