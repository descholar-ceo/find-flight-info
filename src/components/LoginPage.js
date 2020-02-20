/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  handleLoginTyping, handleLoginBtnClicked,
} from '../helpers/handlers';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const fields = {
      emailField: document.getElementById('emailFieldId'),
      passwordField: document.getElementById('passwordFieldId'),
      loginFeedbackDiv: document.getElementById('loginFeedbackDiv'),
    };
    this.setState({ fields });
  }

  render() {
    return (
      <div className="bg-flight-1 height-full padding-2">
        <form className="text-bold height-80 bg-dark-transparent-50 width-40-center padding-2 rounded-border-30 container-vertical">

          <div className="margin-bottom-5">
            <h1 className="text-center text-white">Login here</h1>
          </div>

          {/** EMAIL */}
          <div className="margin-bottom-2">
            <input
              type="email"
              placeholder="enter your email"
              id="emailFieldId"
              className="form-control-sm form-control rounded-border-30  text-center  bg-light-grey"
              onChange={() => handleLoginTyping(this)}
            />
          </div>


          {/** PASSWORD */}
          <div className="margin-bottom-2">
            <input
              type="password"
              placeholder="enter your password"
              id="passwordFieldId"
              className="form-control-sm form-control rounded-border-30  text-center  bg-light-grey"
              onChange={() => handleLoginTyping(this)}
            />
          </div>
          <div id="loginFeedbackDiv" className="text-center margin-bottom-2 text-15 text-red" />

          {/** LOGIN */}
          <div className="margin-bottom-2 container-horizontal">
            <button
              type="button"
              className="btn btn-primary rounded-border-30 width-40-center"
              onClick={() => handleLoginBtnClicked(this)}
            >
              Login
            </button>
          </div>

          <div className="margin-bottom-2 text-center">
            <span>
              <span className="text-white mr-1">You don’t have any account?</span>
              <span>
                <Link className="text-blue-right" to="/signup">Signup</Link>
              </span>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
