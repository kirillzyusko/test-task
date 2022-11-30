import { SET_LIST_OF_ITEMS } from "../actions/checkout";

type Item = {
  "id" : number;
  "name": string;
  "color": string;
  "price": string;
};

type State = {
  data: Item[];
};

const initialState: State = {
  data: [
    {
      "id" : 1,
      "name": "chair",
      "color": "red",
      "price": "$10"
    },
    {
      "id" : 2,
      "name": "table",
      "color": "yellow",
      "price": "$20"
    },
    {
      "id" : 3,
      "name": "cradle",
      "color": "white",
      "price": "$40"
    },
    {
      "id" : 4,
      "name": "shoerack",
      "color": "blue",
      "price": "$15"
    },
    {
      "id" : 5,
      "name": "cupboard",
      "color": "white",
      "price": "$85"
    },
    {
      "id" : 6,
      "name": "bed",
      "color": "white",
      "price": "$100"
    }
  ]
};

const bucketData = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_OF_ITEMS: {
      return {
        ...state,
        data: [...state.data, ...action.payload]
      };
    }
    default:
      return state;
  }
};

export default bucketData;