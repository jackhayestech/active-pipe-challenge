export const TOGGLE_LOADING_DISPLAY = "TOGGLE_LOADING_DISPLAY";

const initialState = {
  errorDisplay: false,
  loadingDisplay: true,
};

const Ui = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING_DISPLAY:
      return {
        ...state,
        loadingDisplay: action.data,
      };
    default:
      return state;
  }
};

export default Ui;
