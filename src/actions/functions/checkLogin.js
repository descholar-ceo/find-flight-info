import { GET_USER_INFO, GET_ERRORS } from '../types';

export const checkLogin = (component) => (dispatch) => {
  console.log(component.props.dataFromReduxStore);
  const { dataFromReduxStore } = component.props;
  if (dataFromReduxStore.login) {
    dispatch({
      type: GET_USER_INFO,
      payload: { login: true },
    });
  } else {
    dispatch({
      type: GET_ERRORS,
      payload: { login: false },
    });
  }
};
export const checkSignup = () => {

};
