import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_SINGLE_USER_REQUEST,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_ERROR,
  CHANGE_PAGE,
} from "redux/constants";

const initialState = {
  error: null,
  loading: null,
  usersList: null,
  user: null,
  page: 1,
};

export default function users(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        usersList: payload,
        loading: false,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GET_SINGLE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case GET_SINGLE_USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: payload,
      };

    default:
      return state;
  }
}
