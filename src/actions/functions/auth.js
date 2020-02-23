
import {
  USER_LOGIN, USER_INFO, REDIRECTION,
} from '../types';

export const userLoginAction = (component) => (dispatch) => {
  component.props.history.push('/user-page');
  dispatch({
    type: USER_LOGIN,
    payload: { login: true },
  });
  dispatch({
    type: USER_INFO,
    payload: { loggedInUser: JSON.parse(window.localStorage.getItem('userData')) },
  });
};

export const isUserLoggedIn = (component) => (dispatch) => {
  const { login } = component.props.dataFromReduxStore;
  if (login.login) {
    dispatch({
      type: REDIRECTION,
      payload: { redirected: true },
    });
    return true;
  }
  return false;
};

export const userLogoutAction = () => (dispatch) => {
  window.location.href = '/';
  dispatch({
    type: USER_LOGIN,
    payload: { login: false },
  });
};
