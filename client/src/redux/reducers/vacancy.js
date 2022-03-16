export const initialState = {
  data: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "VACANCIES":
      return {
        ...state,
        data: action.payload,
      };
    case "VAC_ERROR":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
