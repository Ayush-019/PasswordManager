import axios from "axios";
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

export const createEntry = (entry) => async (dispatch) => {
  try {
    dispatch({ type: NEW_ENTRY_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `https://passwordmanagerbackendapi.herokuapp.com/addentry`,
      entry,
      config
    );

    dispatch({
      type: NEW_ENTRY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_ENTRY_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAllEntries = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_ENTRIES_REQUEST });
    const { data } = await axios.get(`https://passwordmanagerbackendapi.herokuapp.com/entries`);

    dispatch({
      type: ALL_ENTRIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_ENTRIES_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updateEntry = (id, entry) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ENTRY_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `https://passwordmanagerbackendapi.herokuapp.com/updateentry/${id}`,
      entry,
      config
    );
    dispatch({
      type: UPDATE_ENTRY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ENTRY_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteEntry = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ENTRY_REQUEST });

    const { data } = await axios.delete(
      `https://passwordmanagerbackendapi.herokuapp.com/deleteentry/${id}`
    );
    dispatch({
      type: DELETE_ENTRY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ENTRY_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
