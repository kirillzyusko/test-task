import { combineReducers, createStore, legacy_createStore } from "redux";
import goodsReducer from './reducers/goods'
import bucketReducer from './reducers/bucket';

const reducer = combineReducers({
  goods: goodsReducer,
  bucket: bucketReducer,
});

const store = createStore(reducer);

export default store;
