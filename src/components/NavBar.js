/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleToggler } from '../helpers/handlers';
import { isUserLoggedIn, userLogoutAction } from '../actions/functions/auth';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTogglerOpen: false,
    };
    this.props = {
      isUserLoggedIn: PropTypes.func.isRequired,
      userLogoutAction: PropTypes.func.isRequired,
      dataFromReduxStore: PropTypes.object.isRequired,
    };
  }

  render() {
    const { isTogglerOpen } = this.state;
    let navToRender;
    if (this.props.isUserLoggedIn(this)) {
      navToRender = (
        <Nav className="form-inline mt-auto ml-auto" navbar>
          <nav>
            <ul>
              <li>
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm rounded-border-30"
                  onClick={() => this.props.userLogoutAction()}
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </Nav>
      );
    } else {
      navToRender = (
        <Nav className="form-inline mt-auto ml-auto" navbar>
          <nav>
            <ul>
              <li>
                <NavLink
                  className="btn btn-primary btn-sm rounded-border-30"
                  to="/signup"
                >
                  Signup
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="btn btn-success btn-sm rounded-border-30"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>
        </Nav>
      );
    }
    return (
      <div>
        <Navbar
          id="navbarContainer"
          expand="md"
          className="bg-purple"
        >
          <NavbarBrand href="/">
            <span className="text-bold text-30">
              <span className="text-blue-right">Find</span>
              <span className="text-purple-light">Flight</span>
              <span className="text-orange">Info</span>
            </span>

          </NavbarBrand>
          <NavbarToggler onClick={() => handleToggler(this)} />
          <Collapse
            isOpen={isTogglerOpen}
            navbar
            id="options-container"
            className="navbar-options"
          >
            {navToRender}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataFromReduxStore: state.myReducers,
});

export default connect(mapStateToProps, { isUserLoggedIn, userLogoutAction })(NavBar);
