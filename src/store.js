import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";


import thunk from "redux-thunk";
import {
  allEntriesReducer,
  createEntryReducer,
  updateEntry,
  deleteEntry
} from "./Redux/Reducers/entryReducer";


const reducer  = combineReducers({
    allentries : allEntriesReducer,
    entry:createEntryReducer,
    updateentry:updateEntry,
    deleteentry:deleteEntry,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  //   inititalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;