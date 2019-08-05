import { fromJS } from 'immutable';
import { actionTypes } from './index';

const defaultState = fromJS({
  loginState: false,
  userInfo: {}
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_LOGIN: 
      return state.merge({
        loginState: true,
        userInfo: action.value
      });
    case actionTypes.CHANGE_LOGOUT: 
      return state.merge({
        loginState: false,
        userInfo: {}
      });
    default: 
      return state;
  }
}