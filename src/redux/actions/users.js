import {
GET_USER_REQUEST,
SET_USER_DATA,
SET_USER_ERROR,
GET_SINGLE_USER_REQUEST,
SET_SINGLE_USER_DATA,
SET_SINGLE_USER_ERROR,
CHANGE_PAGE
} from "../constants";

export const getUsers = (data) => ({
  type: GET_USER_REQUEST,
  payload: data
});

export const setUsers = (data) => ({
  type: SET_USER_DATA,
  payload: data,
});

export const setUsersError = (error) => ({
  type: SET_USER_ERROR,
  payload: error,
});

export const getUser = (data) => ({
  type: GET_SINGLE_USER_REQUEST,
  payload: data
});

export const setUser = (data) => ({
  type: SET_SINGLE_USER_DATA,
  payload: data,
});

export const setUserError = (error) => ({
  type: SET_SINGLE_USER_ERROR,
  payload: error,
});

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  payload: page,
});
