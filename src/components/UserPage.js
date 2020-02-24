/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import {
  handleOriginSelection,
  handleDestinationSelection,
  handleListCities,
} from '../helpers/handlers';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const fields = {
      airlineField: document.getElementById('airlineField'),
      originField: document.getElementById('originField'),
      waitingOriginSpan: document.getElementById('waitingOriginSpan'),
      waitingDestinationSpan: document.getElementById('waitingDestinationSpan'),
      destinationField: document.getElementById('destinationField'),
      currencyField: document.getElementById('currencyField'),
      seePriceBtn: document.getElementById('seePriceBtn'),
      pricesDisplayDiv: document.getElementById('pricesDisplayDiv'),
    };
    this.setState({ fields });
    handleListCities(fields, this);
  }

  render() {
    return (
      <div className="bg-flight-2 height-full padding-2">
        <div className="width-90-center bg-dark-transparent-20 p-2 rounded-border-15">
          <div className="text-bold text-white height-80 width-60-center padding-2 rounded-border-15 container-vertical">

            <div className="margin-bottom-5">
              <h3 className="text-center">Provide us some information to be able to help you</h3>
            </div>

            {/** CURRENCY */}
            <div className="mb-1 form-row">
              <span className="col-md-4">Select currency : </span>
              <select
                id="currencyField"
                className="custom-select-lg custom-select rounded-border-15 text-center bg-light-grey col-md-7"
              >
                <option value="RWF">Rwandan Franc (RWF)</option>
                <option value="USD">US Dollar ($)</option>
                <option value="EUR">Euro (€)</option>
              </select>
            </div>

            {/** ORIGIN */}
            <div className="mb-1 form-row">
              <span className="col-md-4">Origin : </span>
              <select
                id="originField"
                className="custom-select-lg custom-select rounded-border-15 text-center bg-light-grey col-md-7"
                onChange={() => handleOriginSelection(this)}
              >
                <option value="">---select origin here---</option>
              </select>
              <div className="col-md-1">
                <span id="waitingOriginSpan" />
              </div>
            </div>


            {/** DESTINATION */}
            <div className="mb-1 form-row">
              <span className="col-md-4">Destination : </span>
              <select
                id="destinationField"
                className="custom-select-lg custom-select rounded-border-15 text-center bg-light-grey col-md-7"
                onChange={() => handleDestinationSelection(this)}
              >
                <option value="">---select destination here---</option>
              </select>
              <div className="col-md-1">
                <span id="waitingDestinationSpan" />
              </div>
            </div>

          </div>
          <div
            id="pricesDisplayDiv"
            className="width-80-center bg-dark-transparent-50 height-20 padding-1 rounded-border-15"
          />
        </div>
      </div>
    );
  }
}

export default UserPage;
