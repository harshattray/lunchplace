/**
 * @Author: harsha
 * @Date:   2019-06-05T08:23:30+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-06-05T09:56:31+05:30
 */

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import RestData from "./fetchRestaurntsReducers";

export default combineReducers({
  form: formReducer,
  restStack: RestData
});
