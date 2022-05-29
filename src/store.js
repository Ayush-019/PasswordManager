import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";


import thunk from "redux-thunk";
import { allEntriesReducer } from "./Redux/Reducers/entryReducer";


const reducer  = combineReducers({
    entries : allEntriesReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  //   inititalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;