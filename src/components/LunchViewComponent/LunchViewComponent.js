/**
 * @Author: harsha
 * @Date:   2019-06-05T08:33:34+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-06-05T10:04:33+05:30
 */
import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Dimmer, Loader, Segment, Card, Grid } from "semantic-ui-react";
import SearchbarComponent from "../SearchViewComponent/SearchViewComponent";

export class LunchViewComponent extends Component {
  render() {
    return (
      <Fragment>
        <SearchbarComponent />
      </Fragment>
    );
  }
}

function mapStateToProps({ restStack }) {
  console.log(restStack, "stack data");
  return {
    restDataStack: restStack,
    isLoading: restStack.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDetails }, dispatch);
}
export default connect(
  mapStateToProps,
  {}
)(LunchViewComponent);
