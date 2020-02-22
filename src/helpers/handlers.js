/* eslint-disable no-restricted-globals */
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
    fullName,
    yearOfBirth,
    email,
    password,
    confirmPassword,
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
            window.localStorage.setItem('userData', userData);
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
