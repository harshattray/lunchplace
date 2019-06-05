/**
 * @Author: harsha
 * @Date:   2019-06-05T09:52:13+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-06-05T10:09:57+05:30
 */

import {
  GET_SEARCH_RESULTS,
  INIT_SEARCH_REQUEST,
  SEARCH_RESULTS_FAIL
} from "../actions/types";

const initial_state = {
  isFetching: true
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
    default:
      return state;
  }
};
