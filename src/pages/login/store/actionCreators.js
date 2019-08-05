import { actionTypes } from './index';
import axios from 'axios';
import { fromJS } from 'immutable';

const LoginAction = (value) => ({
  type: actionTypes.CHANGE_LOGIN,
  value: fromJS(value)
});

export const Login = (account, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}password=${password}`).then(res => {
      dispatch(LoginAction(res.data.data));
    }).catch(() => {
      console.log('error: 登录失败');
    })
  }
};

export const Logout = () => ({
  type: actionTypes.CHANGE_LOGOUT
});