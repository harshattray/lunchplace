/**
 * @Author: harsha
 * @Date:   2019-06-05T09:20:26+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-06-05T10:01:45+05:30
 */

import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { reduxForm, Field, reset } from "redux-form";
import { RenderInputFields } from "../RenderInputFieldComponent/RenderInputFieldComponent";
import { fetchRestaurantsData } from "../../actions/fetchRestaurantsActions";
import { validate } from "../../validate";

/**
 * [InputComponent]
 * @extends Component
 */

class InputComponent extends Component {
  dispatchRepoRequest = data => {
    this.props.fetchRestaurantsData(data);
  };

  render() {
    const { handleSubmit, invalid, submitting } = this.props;
    return (
      <form
        name="restSearchForm"
        onSubmit={handleSubmit(this.dispatchRepoRequest)}
        noValidate
        className="form-section"
      >
        <Field
          name="orgname"
          component={RenderInputFields}
          placeholder="Enter City Name"
          type="text"
          required
          label="Search City"
          className="column"
        />
        <Button
          className="search-button"
          disabled={invalid}
          loading={submitting}
        >
          Search
        </Button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRestaurantsData }, dispatch);
}

const afterSubmitdata = (result, dispatch) => dispatch(reset("restSearchForm"));

InputComponent = reduxForm({
  validate,
  form: "restSearchForm",
  destroyOnUnmount: false,
  onSubmitSuccess: afterSubmitdata
})(InputComponent);

export default connect(
  null,
  mapDispatchToProps
)(InputComponent);
