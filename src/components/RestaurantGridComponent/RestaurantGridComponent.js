/**
 * @Author: harsha
 * @Date:   2019-06-05T10:26:46+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-06-05T15:14:16+05:30
 */

import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Icon, Label, Table, Button, Input } from "semantic-ui-react";
import {
  updateVotesCount,
  nameUpdateWatcher,
  choiceUpdateWatcher
} from "../../actions/fetchRestaurantsActions";

class RestaurantGridComponent extends Component {
  /**
   * [updateVotesHandler description]
   * @return {[type]} [description]
   */
  updateVotesHandler = () => {
    const { votes, updatedVotes, rating, ratingCount, name } = this.props;
    const newRating = { ...rating };
    const newRatingCount = { ...ratingCount };
    const newVotes = [
      ...votes,
      {
        name: name,
        vote: updatedVotes
      }
    ];

    if (name && updatedVotes) {
      newRatingCount[updatedVotes] = newRatingCount[updatedVotes] + 1;
      for (const key in rating) {
        const eachVoteCount = newRatingCount[key];
        newRating[key] = (eachVoteCount / newVotes.length) * 10;
      }
      this.props.updateVotesCount(newVotes, name, newRating, newRatingCount);
    }
  };

  /**
   * [renderHeadSection description]
   * @param  {[type]} restGridStack [description]
   * @param  {[type]} rating        [description]
   * @return {[type]}               [description]
   */

  renderHeadSection = (restGridStack, rating) => {
    const maxVal = Math.max.apply(null, Object.values(rating));
    return restGridStack.map((restaurant, index) => {
      return (
        <Table.HeaderCell key={index}>
          <h3 className="center-align">{restaurant.venue.name}</h3>
          <h4 className="center-align">
            {restaurant.venue.categories[0].name}
            {maxVal > 0 && rating[index] === maxVal && (
              <Icon name="trophy" color="yellow" />
            )}
          </h4>
          <h5 className="center-align">
            {parseFloat(rating[index]).toFixed(2) || 0.0}
          </h5>
        </Table.HeaderCell>
      );
    });
  };

  /**
   * [registerNameChange description]
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */

  registerNameChange = e => {
    this.props.nameUpdateWatcher(e.target.value);
  };

  /**
   * [registerOptionChange description]
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */

  registerOptionChange = e => {
    this.props.choiceUpdateWatcher(e.target.value);
  };

  /**
   * [renderVotesResult description]
   * @param  {[type]} votes [description]
   * @return {[type]}       [description]
   */

  renderVotesResult = votes => {
    return votes.map((voteCount, index) => (
      <tr key={index}>
        <td>
          <h3>{voteCount.name}</h3>
        </td>
        <td>
          {voteCount.vote === "0" && <Icon name="checkmark" color="green" />}
        </td>
        <td>
          {voteCount.vote === "1" && <Icon name="checkmark" color="green" />}
        </td>
        <td>
          {voteCount.vote === "2" && <Icon name="checkmark" color="green" />}
        </td>
      </tr>
    ));
  };

  render() {
    const { restGridStack, rating, votes, name } = this.props;
    return (
      <Fragment>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Participant</Table.HeaderCell>
              {restGridStack ? (
                this.renderHeadSection(restGridStack, rating)
              ) : (
                <span>loading...</span>
              )}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderVotesResult(votes)}
            <Table.Row>
              <Table.Cell>
                <Input
                  name="name"
                  onChange={this.registerNameChange}
                  defaultValue={name}
                  s={6}
                />
              </Table.Cell>
              <Table.Cell>
                <Input
                  value={0}
                  type="radio"
                  id="one"
                  name="updatedVotes"
                  onChange={this.registerOptionChange}
                />
                <label htmlFor="one" />
                <div className="check" />
              </Table.Cell>
              <Table.Cell>
                <Input
                  type="radio"
                  value={1}
                  id="two"
                  name="updatedVotes"
                  onChange={this.registerOptionChange}
                />
                <label htmlFor="two" />
                <div className="check" />
              </Table.Cell>
              <Table.Cell>
                <Input
                  type="radio"
                  value={2}
                  id="three"
                  name="updatedVotes"
                  onChange={this.registerOptionChange}
                />
                <label htmlFor="three" />
                <div className="check" />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Button onClick={this.updateVotesHandler}>Add participant</Button>
      </Fragment>
    );
  }
}

function mapStateToProps({ restStack }) {
  return {
    restGridStack: restStack.restaurantStack,
    isLoading: restStack.isLoading,
    rating: restStack.rating,
    votes: restStack.votes,
    name: restStack.name,
    ratingCount: restStack.ratingCount,
    updatedVotes: restStack.updatedVotes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { updateVotesCount, nameUpdateWatcher, choiceUpdateWatcher },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantGridComponent);
