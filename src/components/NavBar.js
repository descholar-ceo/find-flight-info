/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
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
import { checkLogin } from '../actions/functions/checkLogin';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTogglerOpen: false,
    };
    this.props = {
      checkLogin: PropTypes.func.isRequired,
      dataFromReduxStore: PropTypes.object.isRequired,
    };
  }

  componentDidMount() {
    // const userData = JSON.parse(window.localStorage.getItem('userData'));
    this.props.checkLogin(this);
  }

  render() {
    const { isTogglerOpen } = this.state;
    return (
      <div>
        <Navbar
          id="navbarContainer"
          expand="md"
          className="bg-purple"
        >
          <NavbarBrand href="/">
            <span>
              <span>Find</span>
              <span>Flight</span>
              <span>Info</span>
            </span>

          </NavbarBrand>
          <NavbarToggler onClick={() => handleToggler(this)} />
          <Collapse
            isOpen={isTogglerOpen}
            navbar
            id="options-container"
            className="navbar-options"
          >

            <Nav className="form-inline mt-auto ml-auto" navbar>
              <nav>
                <ul>
                  <li>Enter</li>
                </ul>
              </nav>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataFromReduxStore: state.myReducers,
});
export default connect(mapStateToProps, { checkLogin })(NavBar);
