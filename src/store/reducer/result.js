import * as actionType from "../action";
const initialState = {
  result: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULT:
      return {
        ...state,
        result: state.result.concat({
          value: action.result,
          id: new Date()
        })
      };

    case actionType.DELETE_RESULT:
      const updatedArray = state.result.filter(
        result => result.id !== action.resultElementID
      );
      return {
        ...state,
        result: updatedArray
      };

    default:
      state;
  }
  // if (action.type === "INCREMENT") {
  //   return {
  //     counter: state.counter + 1
  //   };
  // }
  return state;
};

export default reducer;
