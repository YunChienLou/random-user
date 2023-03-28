import axios from "axios";

export const get_pagination_user = async (page, amount) => {
  return axios.get(
    "https://randomuser.me/api/?page=" +
      page +
      "&results=" +
      amount +
      "&seed=abc"
  );
};
