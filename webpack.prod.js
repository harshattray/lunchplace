/**
 * @Author: harsha
 * @Date:   2019-06-05T07:57:10+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-06-05T08:37:41+05:30
 */

const merge = require("webpack-merge");
const base = require("./webpack.base.js");

module.exports = merge(base, {
  mode: "production"
});
