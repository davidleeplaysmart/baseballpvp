import fetch from 'cross-fetch';
import * as constants from '../../constants'

export const login = data => dispatch => {
  dispatch({
    type: constants.USER_LOGGING_IN
  });
  return fetch(`https://www.reddit.com/r/1.json`)
    .then(response => response.json())
    .then(data => dispatch({
      type: constants.USER_LOGGED_IN,
      payload: data
    }));
};

export function logout() {
  return {
    type: constants.USER_LOGGED_OUT
  }
};
