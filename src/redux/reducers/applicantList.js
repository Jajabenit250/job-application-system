export const initialState = {
    data: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVED_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
