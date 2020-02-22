/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  handleFullNameTyping,
  handleYearOfBirthFocus,
  handleYearOfBirthTyping,
  handlePasswordTyping,
  handleConfirmPasswordTyping,
  handleSignupBtnClicked,
  handleEmailTyping,
} from '../helpers/handlers';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const fields = {
      fullNameField: document.getElementById('fullNameFieldId'),
      fullNameErrorDiv: document.getElementById('fullNameErrorDiv'),
      yearOfBirthField: document.getElementById('yearOfBirthFieldId'),
      yearOfBirthErrorDiv: document.getElementById('yearOfBirthErrorDiv'),
      emailField: document.getElementById('emailFieldId'),
      emailErrorDiv: document.getElementById('emailErrorDiv'),
      passwordField: document.getElementById('passwordFieldId'),
      passwordErrorDiv: document.getElementById('passwordErrorDiv'),
      confirmPasswordField: document.getElementById('confirmPasswordField'),
      confirmPasswordErrorDiv: document.getElementById('confirmPasswordErrorDiv'),
    };
    this.setState({ fields });
  }

  render() {
    return (
      <div className="bg-flight-1 height-full padding-2">
        <form className="text-bold height-80 bg-dark-transparent-50 width-40-center padding-2 rounded-border-30 container-vertical">

          <div className="margin-bottom-5">
            <h1 className="text-center text-white">Fill this form to signup</h1>
          </div>


          {/** FULL NAMES */}
          <div className="margin-bottom-2">
            <input
              type="text"
              placeholder="full name"
              height="30"
              id="fullNameFieldId"
              className="form-control-sm form-control rounded-border-30  text-center bg-light-grey"
              onChange={() => handleFullNameTyping(this)}
            />
          </div>
          <div id="fullNameErrorDiv" className="text-center margin-bottom-2 text-15 text-red" />


          {/** YEAR OF BIRTH */}
          <div className="margin-bottom-2">
            <input
              type="number"
              placeholder="year of birth"
              id="yearOfBirthFieldId"
              className="form-control-sm form-control rounded-border-30  text-center  bg-light-grey"
              onFocus={() => handleYearOfBirthFocus(this)}
              onChange={() => handleYearOfBirthTyping(this)}
            />
          </div>
          <div id="yearOfBirthErrorDiv" className="text-center margin-bottom-2 text-15 text-red" />


          {/** EMAIL */}
          <div className="margin-bottom-2">
            <input
              type="email"
              placeholder="your email"
              id="emailFieldId"
              className="form-control-sm form-control rounded-border-30  text-center  bg-light-grey"
              onChange={() => handleEmailTyping(this)}
            />
          </div>
          <div id="emailErrorDiv" className="text-center margin-bottom-2 text-15 text-red" />


          {/** PASSWORD */}
          <div className="margin-bottom-2">
            <input
              type="password"
              placeholder="choose a password to use"
              id="passwordFieldId"
              className="form-control-sm form-control rounded-border-30  text-center  bg-light-grey"
              onChange={() => handlePasswordTyping(this)}
            />
          </div>
          <div id="passwordErrorDiv" className="text-center margin-bottom-2 text-15 text-red" />


          {/** CONFIRM PASSWORD */}
          <div className="margin-bottom-2">
            <input
              type="password"
              placeholder="confirm your password"
              id="confirmPasswordField"
              className="form-control-sm form-control rounded-border-30  text-center  bg-light-grey"
              onChange={() => handleConfirmPasswordTyping(this)}
            />
          </div>
          <div id="confirmPasswordErrorDiv" className="text-center margin-bottom-2 text-15 text-red" />


          <div className="margin-bottom-2 container-horizontal">
            <button
              type="button"
              className="btn btn-primary rounded-border-30 width-40-center"
              onClick={() => handleSignupBtnClicked(this)}
            >
              Signup
            </button>
          </div>

          <div className="margin-bottom-2 text-center">
            <span>
              <span className="text-white mr-1">Already have an account?</span>
              <span>
                <Link className="text-blue-right" to="/login">Login</Link>
              </span>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupPage;
