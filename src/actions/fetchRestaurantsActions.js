/**
 * @Author: harsha
 * @Date:   2019-06-05T09:36:18+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-06-05T15:15:07+05:30
 */
import {
  GET_SEARCH_RESULTS,
  INIT_SEARCH_REQUEST,
  SEARCH_RESULTS_FAIL,
  UPDATE_VOTES_COUNT,
  FIELD_UPDATE_WATCHER,
  NAME_UPDATE_WATCHER,
  CHOICE_UPDATE_WATCHER
} from "./types";
import qs from "qs";
import axios from "axios";
import { baseUrl } from "../constants";

/**
 * [fetchRestaurantsData description]
 * @param  {[type]} formData [description]
 * @return {[type]}          [description]
 */

export const fetchRestaurantsData = formData => async (dispatch, getState) => {
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

/**
 * [initfetchRepoData description]
 * @return {[type]} [description]
 */

function initfetchRepoData() {
  return {
    type: INIT_SEARCH_REQUEST,
    isLoading: true
  };
}

/**
 * [updateVotesCount description]
 * @param  {[type]} votes       [description]
 * @param  {[type]} name        [description]
 * @param  {[type]} rating      [description]
 * @param  {[type]} ratingCount [description]
 * @return {[type]}             [description]
 */

export const updateVotesCount = (votes, name, rating, ratingCount) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: UPDATE_VOTES_COUNT,
    votes,
    name,
    rating,
    ratingCount
  });
};

/**
 * [nameUpdateWatcher description]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export const nameUpdateWatcher = data => async (dispatch, getState) => {
  dispatch({
    type: NAME_UPDATE_WATCHER,
    name: data
  });
};

/**
 * [choiceUpdateWatcher description]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */

export const choiceUpdateWatcher = data => async (dispatch, getState) => {
  dispatch({
    type: CHOICE_UPDATE_WATCHER,
    updatedVotes: data
  });
};
