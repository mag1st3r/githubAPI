import { instance } from "api/index";

import { GET_USERS } from "constants/api";

export const getUsers = async (since = 0) => {
  return instance.get(`${GET_USERS}?since=${since}&per_page=10`).then((response) => {
    return response.data;
  });
};

export const getSingleUser = async (username) => {
  return instance.get(`${GET_USERS}/${username}`).then((response) => {
    return response.data;
  });
};
