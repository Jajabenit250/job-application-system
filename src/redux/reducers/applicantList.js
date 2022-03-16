export const initialState = {
  data: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "APPLICANTS":
      return {
        ...state,
        data: action.payload,
      };

    case "APPLICANTS_ERROR":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
