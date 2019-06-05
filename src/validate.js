/**
 * @Author: harsha
 * @Date:   2019-06-05T09:23:57+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-06-05T09:24:32+05:30
 */

export const validate = values => {
  const errors = {};
  if (!values.model) {
    errors.model = "Please Select input value";
  }
  return errors;
};
