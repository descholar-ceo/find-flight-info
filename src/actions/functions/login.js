import { USER_LOGIN } from '../types';

const userLogin = (component) => (dispatch) => {
  component.props.history.push('/user-page');
  dispatch({
    type: USER_LOGIN,
    payload: { login: true },
  });
};

export default userLogin;
