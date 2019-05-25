export const TOGGLE_LOADING_DISPLAY = "TOGGLE_LOADING_DISPLAY";
export const SET_ALERT_MESSAGE = "SET_ALERT_MESSAGE";
export const SET_FILTER = "SET_FILTER";

const initialState = {
  alert: {
    display: false,
    type: null,
  },
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
    case SET_ALERT_MESSAGE:
      return {
        ...state,
        alert: action.data,
      }
    case 'RESET':
        return initialState
    default:
      return state;
  }
};

export default Ui;
