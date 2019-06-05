/**
 * @Author: harsha
 * @Date:   2019-06-05T09:15:08+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-06-05T09:22:42+05:30
 */
import React, { Fragment, Component } from "react";
import {
  Icon,
  Button,
  Divider,
  Input,
  Segment,
  Header,
  Image,
  Dimmer,
  Loader
} from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SearchBarStyles from "./SearchBarStyles";
import InputComponent from "../InputComponent/InputComponent";

class SearchbarComponent extends Component {
  render() {
    return (
      <Fragment>
        <SearchBarStyles>
          <div className="form-grid">
            <InputComponent />
          </div>
        </SearchBarStyles>
      </Fragment>
    );
  }
}

export default connect(null)(SearchbarComponent);
