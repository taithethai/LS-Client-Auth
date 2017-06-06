import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { signUp } from '../actions';
import { connect } from 'react-redux';

class SignUp extends Component {
  handleFormSubmit() {
    this.props.signIn(email, password, confirmPassword, this.props.history);
  }
  render() {
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset>
          <label>Email:</label>
          <Field name="email" component="input" type="text" />
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <Field name="password" component="input" type="password" />
          <label>Confirm Password:</label>
          <Field name="confirmPassword" component="input" type="password" />
        </fieldset>
        <button action="submit">Sign Up</button>
        {this.renderAlert()}
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    authenticated: state.auth.authenticated,
  };
};

SignUp = connect(mapStateToProps, { signUp })(SignUp);

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'confirmPassword'],
})(SignUp);
// Complete the component in this file.
