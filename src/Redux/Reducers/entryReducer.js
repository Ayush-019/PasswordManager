import {
  ALL_ENTRIES_FAIL,
  ALL_ENTRIES_REQUEST,
  ALL_ENTRIES_SUCCESS,
} from "../Constants/entryConstants";

export const allEntriesReducer = (state = [], action) => {
  switch (action.type) {
    case ALL_ENTRIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_ENTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: action.payload,
      };
    case ALL_ENTRIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
