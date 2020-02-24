import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isUserLoggedIn } from '../actions/functions/auth';
import { handleRedirection } from '../helpers/handlers';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props = {
      isUserLoggedIn: PropTypes.func.isRequired,
      dataFromReduxStore: PropTypes.object.isRequired,
    };
  }

  componentDidMount() {
    handleRedirection(this);
  }

  render() {
    return (
      <div className="bg-flight-3 height-full padding-2">

        <div className="text-bold text-white shadows-black bg-dark-transparent-50 p-5 width-60-center rounded-border-15 mt-5">
          <div className="margin-bottom-5">
            <p>
              The world is globalized, more people need to travel more
              for business trips, for visiting, for jobs and for tourism.
              When someone is planning to go to the foreign country, he/she might
              wonder where to get some information regarding to prices of flights,
              and which time the flight is available.
            </p>
            <p>
              <span className="bg-dark-transparent-50 rounded-border-30 p-1">
                <span className="text-blue-right">Find</span>
                <span className="text-purple-light">Flight</span>
                <span className="text-orange">Info</span>
              </span>
              {' '}
              comes in as a solution to those who needs to access some information
              regarding to the flight info, we provide you flexible and interactive
              platform to use in order to get the information you need, click the get started
              button you see below and enjoy our services
            </p>
          </div>


        </div>
        <div className="width-40-center entrance-button">
          <Link
            to="/signup"
            className="btn btn-primary rounded-border-15 btn-block btn-sm shadows-black text-22"
          >
            Get started!
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataFromReduxStore: state.myReducers,
});
export default connect(mapStateToProps, { isUserLoggedIn })(LandingPage);
