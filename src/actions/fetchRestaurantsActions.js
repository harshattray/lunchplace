/**
 * @Author: harsha
 * @Date:   2019-06-05T09:36:18+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-06-05T10:06:53+05:30
 */
import {
  GET_SEARCH_RESULTS,
  INIT_SEARCH_REQUEST,
  SEARCH_RESULTS_FAIL
} from "./types";
import qs from "qs";
import axios from "axios";
import { baseUrl } from "../constants";
console.log(baseUrl);

export const fetchRestaurantsData = formData => async (dispatch, getState) => {
  debugger;
  const { orgname } = formData;
  try {
    const res = await axios.get(
      `${baseUrl}&query=lunch&near=${orgname}&v=20170801&limit=3`
    );
    dispatch({
      type: GET_SEARCH_RESULTS,
      payload: res,
      isLoading: false
    });
  } catch (e) {
    dispatch({
      type: SEARCH_RESULTS_FAIL,
      payload: e,
      isLoading: false
    });
  }
};

function initfetchRepoData() {
  return {
    type: INIT_SEARCH_REQUEST,
    isLoading: true
  };
}
