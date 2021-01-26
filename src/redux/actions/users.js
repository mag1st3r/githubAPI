import {
GET_USER_REQUEST,
SET_USER_DATA,
SET_USER_ERROR,
GET_SINGLE_USER_REQUEST,
SET_SINGLE_USER_DATA,
SET_SINGLE_USER_ERROR,
CHANGE_PAGE
} from "../constants";

export const GetUsers = (data) => ({
  type: GET_USER_REQUEST,
  payload: data
});

export const GetUsersSuccess = (data) => ({
  type: SET_USER_DATA,
  payload: data,
});

export const GetUsersError = (error) => ({
  type: SET_USER_ERROR,
  payload: error,
});

export const GetUser = (data) => ({
  type: GET_SINGLE_USER_REQUEST,
  payload: data
});

export const GetUserSuccess = (data) => ({
  type: SET_SINGLE_USER_DATA,
  payload: data,
});

export const GetUserError = (error) => ({
  type: SET_SINGLE_USER_ERROR,
  payload: error,
});

export const ChangePage = (page) => ({
  type: CHANGE_PAGE,
  payload: page,
});
