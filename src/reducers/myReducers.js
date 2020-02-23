import { GET_ERRORS, USER_LOGIN } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case GET_ERRORS:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
