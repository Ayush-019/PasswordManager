import {
  ALL_ENTRIES_FAIL,
  ALL_ENTRIES_REQUEST,
  ALL_ENTRIES_SUCCESS,
  NEW_ENTRY_REQUEST,
  NEW_ENTRY_SUCCESS,
  NEW_ENTRY_FAIL,
  UPDATE_ENTRY_REQUEST,
  UPDATE_ENTRY_SUCCESS,
  UPDATE_ENTRY_FAIL,
  DELETE_ENTRY_REQUEST,
  DELETE_ENTRY_SUCCESS,
  DELETE_ENTRY_FAIL,
  CLEAR_ERRORS,
} from "../Constants/entryConstants";

export const allEntriesReducer = (state = {}, action) => {
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
        entries: action.payload.entries,
        succes: true,
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

export const createEntryReducer = (state = { entry: {} }, action) => {
  switch (action.type) {
    case NEW_ENTRY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_ENTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        entry: action.payload.entry,
        success: action.payload.success,
      };
    case NEW_ENTRY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


export const updateEntry = (state = { entry: {} }, action) => {
  switch (action.type) {
    case UPDATE_ENTRY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_ENTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        entry: action.payload.entry,
        success: action.payload.success,
      };
    case UPDATE_ENTRY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}

export const deleteEntry = (state = { entry: {} }, action) => {
  switch (action.type) {
    case DELETE_ENTRY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ENTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        entry: action.payload.entry,
        success: action.payload.success,
      };
    case DELETE_ENTRY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}