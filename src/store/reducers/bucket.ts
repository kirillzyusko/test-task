import { SET_ITEMS_TO_BUCKET } from "../actions/checkout";

const initialState = {
  // [{id: 2, count: 5}]
  // { 5: { count: 1 } }
  // Object.keys()
  items: []
};

const bucketData = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS_TO_BUCKET: {
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    }
    default:
      return state;
  }
};

export default bucketData;