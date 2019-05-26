const initialState = {
  data: null
};

export const LOAD_PROPERTIES = 'LOAD_PROPERTIES';

const Properties = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROPERTIES:
      return {
        ...state,
        data: action.data,
      };
    case 'RESET':
      return initialState
    default:
      return state;
  }
};

export default Properties;
