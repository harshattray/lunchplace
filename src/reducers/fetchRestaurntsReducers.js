/**
 * @Author: harsha
 * @Date:   2019-06-05T09:52:13+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-06-05T14:28:14+05:30
 */

import {
  GET_SEARCH_RESULTS,
  INIT_SEARCH_REQUEST,
  SEARCH_RESULTS_FAIL,
  UPDATE_VOTES_COUNT,
  FIELD_UPDATE_WATCHER,
  CHOICE_UPDATE_WATCHER,
  NAME_UPDATE_WATCHER
} from "../actions/types";

const initial_state = {
  isFetching: true,
  rating: {
    "0": 0,
    "1": 0,
    "2": 0
  },
  ratingCount: {
    "0": 0,
    "1": 0,
    "2": 0
  },
  votes: [],
  name: "",
  updatedVotes: ""
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case GET_SEARCH_RESULTS:
      return {
        ...state,
        restaurantStack: action.payload.data.response.groups[0].items,
        isLoading: action.isLoading
      };
    case INIT_SEARCH_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case UPDATE_VOTES_COUNT:
      return {
        ...state,
        votes: action.votes,
        name: action.name,
        rating: action.rating,
        ratingCount: action.ratingCount
      };
    case NAME_UPDATE_WATCHER:
      return {
        ...state,
        name: action.name
      };
    case CHOICE_UPDATE_WATCHER:
      return {
        ...state,
        updatedVotes: action.updatedVotes
      };
    default:
      return state;
  }
};
