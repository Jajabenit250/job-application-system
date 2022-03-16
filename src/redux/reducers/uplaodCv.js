export const initialState = {
  data: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "APPY_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
    case "APPLY_ERROR":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
