export const TOGGLE_LOADING_DISPLAY = "TOGGLE_LOADING_DISPLAY";
export const SET_FILTER = "SET_FILTER";

const initialState = {
  errorDisplay: false,
  loadingDisplay: true,
  filter: 'filter_status',
};

const Ui = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING_DISPLAY:
      return {
        ...state,
        loadingDisplay: action.data,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.data,
      };
    default:
      return state;
  }
};

export default Ui;
