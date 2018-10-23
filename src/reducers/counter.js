const initialState = {
  count: 0,
  count1: 0,
  numChangeTo: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        count1: state.count1 + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        count1: state.count1 + 1
      };
    case 'DISPLAYCHANGE':
      return {
        ...state, 
        count1: (state.count1 = 0),
        count: parseInt(state.numChangeTo)
      };

    case 'ONNUMBERCHANGE':
      return {
        ...state,
        numChangeTo: action.number
      };

    default:
      return state;
  }
}

export default counterReducer;