/**
 * @Author: harsha
 * @Date:   2019-06-05T08:33:34+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-06-05T11:38:34+05:30
 */
import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Dimmer, Loader, Segment, Card, Grid } from "semantic-ui-react";
import SearchbarComponent from "../SearchViewComponent/SearchViewComponent";
import RestaurantGridComponent from "../RestaurantGridComponent/RestaurantGridComponent";

export class LunchViewComponent extends Component {
  render() {
    const { restDataStack } = this.props;
    return (
      <Fragment>
        <SearchbarComponent />
        {restDataStack ? (
          <RestaurantGridComponent />
        ) : (
          <p>Restaurant data shows up here</p>
        )}
      </Fragment>
    );
  }
}

function mapStateToProps({ restStack }) {
  return {
    restDataStack: restStack.restaurantStack,
    isLoading: restStack.isLoading
  };
}

export default connect(
  mapStateToProps,
  {}
)(LunchViewComponent);
