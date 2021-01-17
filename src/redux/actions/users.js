import {
GET_USER_REQUEST,
GET_USER_SUCCESS,
GET_USER_ERROR,
GET_SINGLE_USER_REQUEST,
GET_SINGLE_USER_SUCCESS,
GET_SINGLE_USER_ERROR,
CHANGE_PAGE
} from "../constants";

export const GetUsers = (data) => ({
  type: GET_USER_REQUEST,
  payload: data
});

export const GetUsersSuccess = (data) => ({
  type: GET_USER_SUCCESS,
  payload: data,
});

export const GetUsersError = (error) => ({
  type: GET_USER_ERROR,
  payload: error,
});

export const GetUser = (data) => ({
  type: GET_SINGLE_USER_REQUEST,
  payload: data
});

export const GetUserSuccess = (data) => ({
  type: GET_SINGLE_USER_SUCCESS,
  payload: data,
});

export const GetUserError = (error) => ({
  type: GET_SINGLE_USER_ERROR,
  payload: error,
});

export const ChangePage = (page) => ({
  type: CHANGE_PAGE,
  payload: page,
});
