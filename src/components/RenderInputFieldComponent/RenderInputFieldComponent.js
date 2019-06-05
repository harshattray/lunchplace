/**
 * @Author: harsha
 * @Date:   2019-06-05T09:21:48+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-06-05T09:22:15+05:30
 */

import React, { Fragment } from "react";
import { Input } from "semantic-ui-react";

/**
 * [renderInputFields description]
 * @param  {[type]} label       [Conditionally renders label based on props]
 * @param  {[type]} type        [Type of form to be rendered]
 * @param  {[type]} placeholder [Conditionally rendered placeholder based on props]
 * @param  {[type]} name        [description]
 * @param  {[type]} pattern     [description]
 * @param  {[type]} meta        [description]
 * @param  {[type]} error       [description]
 * @param  {[type]} warning     [description]
 * @param  {[type]} input       [Input object]
 * @return {[type]}             [description]
 */

export const RenderInputFields = ({
  label,
  type,
  placeholder,
  name,
  pattern,
  meta: { touched, error, warning },
  input
}) => {
  return (
    <Fragment>
      <Input type={type} label={label} placeholder={placeholder} {...input} />
      <div>{touched && error && <i>{error}</i>}</div>
    </Fragment>
  );
};
