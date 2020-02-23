/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
import axios from 'axios';
import allIataCodesAirlines from '../resources/iata-airlines';

/** GENERAL HANDLERS */
export const handleDatesWithT = (dateToHandle) => {
  let returnedDate;
  if (dateToHandle.includes('T')) {
    returnedDate = dateToHandle.split('T')[0];
  } else {
    returnedDate = 'Invalid date format';
  }
  return returnedDate;
};

/** DISPLAY AIRLINES IN AIRLINE FIELD */
export const displayAirlines = (fields) => {
  const { airlineField } = fields;
  allIataCodesAirlines().forEach((currAirline) => {
    airlineField.add(new Option(currAirline.Airline, currAirline.IATACode));
  });
};

/** SIGNUP */
// handle full names
export const handleFullNameTyping = (component) => {
  const {
    fullNameField,
    fullNameErrorDiv,
  } = component.state.fields;
  const typedNames = fullNameField.value;
  if (typedNames.length >= 3) {
    fullNameErrorDiv.innerHTML = '';
    component.setState({ fullName: typedNames });
  } else {
    fullNameErrorDiv.innerHTML = 'Full name must have at least 3 characters';
  }
};

// handle year of birth focus
export const handleYearOfBirthFocus = (component) => {
  const { yearOfBirthErrorDiv } = component.state.fields;
  yearOfBirthErrorDiv.innerHTML = '<span class="text-white">Use numbers here</span>';
};

// handle year of birth typing
export const handleYearOfBirthTyping = (component) => {
  const {
    yearOfBirthField,
    yearOfBirthErrorDiv,
  } = component.state.fields;

  const typedYearOfBirth = yearOfBirthField.value;
  if (typedYearOfBirth) {
    if (typedYearOfBirth < 1820 || typedYearOfBirth > 2019) {
      yearOfBirthErrorDiv.innerHTML = 'Invalid Year';
    } else {
      yearOfBirthErrorDiv.innerHTML = '';
      component.setState({ yearOfBirth: typedYearOfBirth });
    }
  } else {
    yearOfBirthErrorDiv.innerHTML = '<span class="text-white">Use numbers here</span>';
  }
};

// HANDLE EMAIL TYPING
export const handleEmailTyping = (component) => {
  const { emailField, emailErrorDiv } = component.state.fields;
  const emailValue = emailField.value;
  if (emailValue.includes('@')) {
    emailErrorDiv.innerHTML = '';
    component.setState({ email: emailValue });
  } else {
    emailErrorDiv.innerHTML = 'Invalid email-address';
  }
};

// HANDLE PASSWORD TYPING
export const handlePasswordTyping = (component) => {
  const {
    passwordField,
    passwordErrorDiv,
  } = component.state.fields;

  const typedPassword = passwordField.value;

  if (typedPassword) {
    if (typedPassword.length < 5 || typedPassword.length > 16) {
      passwordErrorDiv.innerHTML = 'Password must be between 5 and 16';
    } else {
      component.setState({ password: typedPassword });
      passwordErrorDiv.innerHTML = '';
    }
  }
};

// HANDLE CONFIRM PASSWORD TYPING
export const handleConfirmPasswordTyping = (component) => {
  const {
    confirmPasswordField,
    confirmPasswordErrorDiv,
  } = component.state.fields;

  const typedConfirmPassword = confirmPasswordField.value;
  const { password } = component.state;

  if (typedConfirmPassword) {
    if (password) {
      if (password === typedConfirmPassword) {
        confirmPasswordErrorDiv.innerHTML = '';
        component.setState({ confirmPassword: typedConfirmPassword });
      } else {
        confirmPasswordErrorDiv.innerHTML = 'Password mismatch';
      }
    } else {
      confirmPasswordErrorDiv.innerHTML = 'It seems you didn\'t enter the password';
    }
  } else {
    confirmPasswordErrorDiv.innerHTML = 'Confirm your password!';
  }
};

// HANDLE SIGNUP BUTTON CLICKED
export const handleSignupBtnClicked = (component) => {
  const {
    fullName, yearOfBirth, email, password, confirmPassword,
  } = component.state;
  const {
    fullNameErrorDiv,
    yearOfBirthErrorDiv,
    emailErrorDiv,
    passwordErrorDiv,
    confirmPasswordErrorDiv,
  } = component.state.fields;

  if (fullName) {
    fullNameErrorDiv.innerHTML = '';
    if (yearOfBirth) {
      yearOfBirthErrorDiv.innerHTML = '';
      if (email) {
        emailErrorDiv.innerHTML = '';
        if (password) {
          passwordErrorDiv.innerHTML = '';
          if (confirmPassword) {
            const userData = {
              fullName, yearOfBirth, email, password,
            };
            window.localStorage.setItem('userData', JSON.stringify(userData));
            component.props.history.push('/user-page');
          } else {
            confirmPasswordErrorDiv.innerHTML = 'You must confirm your password please!';
          }
        } else {
          passwordErrorDiv.innerHTML = 'Enter your password please!';
        }
      } else {
        emailErrorDiv.innerHTML = 'Enter your email please!';
      }
    } else {
      yearOfBirthErrorDiv.innerHTML = 'Enter your year of birth';
    }
  } else {
    fullNameErrorDiv.innerHTML = 'Enter your full name please!';
  }
};


/** LOGIN */
export const handleLoginTyping = (component) => {
  const { emailField, passwordField } = component.state.fields;
  const emailValue = emailField.value;
  const passwordValue = passwordField.value;
  if (emailValue) {
    component.setState({ email: emailValue });
  }
  if (passwordValue) {
    component.setState({ password: passwordValue });
  }
};

export const handleLoginBtnClicked = (component) => {
  const { loginFeedbackDiv, emailField, passwordField } = component.state.fields;
  const typedEmail = emailField.value;
  const typedPassword = passwordField.value;
  const userData = JSON.parse(window.localStorage.getItem('userData'));
  if (userData) {
    loginFeedbackDiv.innerHTML = '';
    const { email, password } = userData;
    if (typedEmail && typedPassword) {
      loginFeedbackDiv.innerHTML = '';
      if (email === typedEmail && password === typedPassword) {
        loginFeedbackDiv.innerHTML = '';
        component.props.history.push('/user-page');
      } else {
        loginFeedbackDiv.innerHTML = 'Email and Password mismatch';
      }
    } else {
      loginFeedbackDiv.innerHTML = 'Enter your email or password';
    }
  } else {
    loginFeedbackDiv.innerHTML = 'You haven\'t register yet, please click the signup link to go to signup page';
  }
};


/** USER PAGE */
// removing previous options
export const removePreviousOptions = (selectBox) => {
  for (let i = 0; i < selectBox.options.length - 1; i++) {
    selectBox.options[i].remove();
  }
};

// airline selections
export const handleAirlineSelection = (component) => {
  const {
    currencyField, airlineField, originField, waitingOriginSpan,
  } = component.state.fields;
  const selectedAirline = airlineField.value;
  waitingOriginSpan.classList.add('spinner-border');
  waitingOriginSpan.classList.remove('text-danger');
  waitingOriginSpan.classList.remove('text-15');
  waitingOriginSpan.innerHTML = '';

  removePreviousOptions(originField);

  axios({
    method: 'GET',
    url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/airline-directions',
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
      'x-rapidapi-key': '1b75766f4cmsh2b8fe75beed674dp1d1f3fjsn505e0a2090c6',
      'x-access-token': '0b34683ae4f8945e25adcb88b21735ca',
    },
    params: {
      limit: '100',
      airline_code: selectedAirline,
      currency: currencyField.value,
    },
  })
    .then((res) => {
      const availOrigins = Object.entries(res.data.data);
      availOrigins.forEach((currOrigin) => {
        originField.add(new Option(currOrigin[0].split('-')[0]));
        waitingOriginSpan.classList.remove('spinner-border');
        waitingOriginSpan.classList.remove('text-danger');
        waitingOriginSpan.classList.remove('text-15');
        waitingOriginSpan.innerHTML = '';
      });
    })
    .catch((err) => {
      waitingOriginSpan.classList.remove('spinner-border');
      waitingOriginSpan.classList.add('text-danger');
      waitingOriginSpan.classList.add('text-15');
      waitingOriginSpan.innerHTML = 'Something wrong!';
    });
};

// origin selection
export const handleOriginSelection = (component) => {
  const {
    currencyField, originField, destinationField, waitingDestinationSpan,
  } = component.state.fields;

  waitingDestinationSpan.classList.add('spinner-border');
  waitingDestinationSpan.classList.remove('text-danger');
  waitingDestinationSpan.classList.remove('text-15');
  waitingDestinationSpan.innerHTML = '';

  removePreviousOptions(destinationField);

  axios({
    method: 'GET',
    url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions',
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
      'x-rapidapi-key': '1b75766f4cmsh2b8fe75beed674dp1d1f3fjsn505e0a2090c6',
      'x-access-token': '0b34683ae4f8945e25adcb88b21735ca',
    },
    params: {
      origin: originField.value,
      currency: currencyField.value,
    },
  }).then((res) => {
    const availDestinations = Object.entries(res.data.data);
    const { currency } = res.data;

    // displaying options for destinations
    availDestinations.forEach((currDest) => {
      destinationField.add(new Option(currDest[0]));
    });

    // saving routes in state
    component.setState({ availDestinations, currency });

    waitingDestinationSpan.classList.remove('spinner-border');
    waitingDestinationSpan.classList.remove('text-danger');
    waitingDestinationSpan.classList.remove('text-15');
    waitingDestinationSpan.innerHTML = '';
  }).catch((err) => {
    waitingDestinationSpan.classList.remove('spinner-border');
    waitingDestinationSpan.classList.add('text-danger');
    waitingDestinationSpan.classList.add('text-15');
    waitingDestinationSpan.innerHTML = 'Something wrong!';
  });
};

// destination selection
export const handleDestinationSelection = (component) => {
  const { availDestinations, currency } = component.state;
  const { destinationField, pricesDisplayDiv } = component.state.fields;
  const selectedDestination = destinationField.value;
  availDestinations.forEach((currDest) => {
    if (selectedDestination === currDest[0]) {
      pricesDisplayDiv.innerHTML = `
          <div class='width-60-center text-white text-bold text-22'>
            <div class='row'>
              <span class='col-md-6'>Origin : </span><br/>
              <span class='col-md-6'>${currDest[1].origin}</span><br/>
            </div>
            <div class='row'>
              <span class='col-md-6'>Destination : </span><br/>
              <span class='col-md-6'>${currDest[1].destination}</span><br/>
            </div>
            <div class='row'>
              <span class='col-md-6'>Departure date : </span><br/>
              <span class='col-md-6'>${handleDatesWithT(currDest[1].departure_at)}</span><br/>
            </div>
            <div class='row'>
              <span class='col-md-6'>Return date : </span><br/>
              <span class='col-md-6'>${handleDatesWithT(currDest[1].return_at)}</span><br/>
            </div>
            <div class='row'>
              <span class='col-md-6'>Price : </span><br/>
              <span class='col-md-6'>${currDest[1].price} ${currency}</span><br/>
            </div>
          </div>
          `;
    }
  });
};
