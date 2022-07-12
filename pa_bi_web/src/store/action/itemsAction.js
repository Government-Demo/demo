import { GET_ITEMS, USERS_ERROR } from "../types";
import axios from "axios";

export const getItems = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/auction`);
    dispatch({
      type: GET_ITEMS,
      payload: res.data.data,
    });
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e),
    });
  }
};
