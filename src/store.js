import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";


import thunk from "redux-thunk";
import {
  allEntriesReducer,
  createEntryReducer,
  updateEntry,
  deleteEntry,
} from "./Redux/Reducers/entryReducer";
import { userReducer } from "./Redux/Reducers/userReducer";


const reducer  = combineReducers({
    allentries : allEntriesReducer,
    entry:createEntryReducer,
    updateentry:updateEntry,
    deleteentry:deleteEntry,
    user:userReducer
});

const middleware = [thunk];

const store = createStore(
  reducer,
  //   inititalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;