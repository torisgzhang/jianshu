import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  LoginWrapper
} from './login';
import { actionCreators } from './store';

class Login extends PureComponent {
  render() {
    const { loginState, login } = this.props;
    if(!loginState) {
      return (
        <LoginWrapper className="login-wrapper">
          <input type="text" ref={(input => this.account = input)} />
          <input type="password" ref={(input => this.password = input)} />
          <button onClick={() => login(this.account.value, this.password.value)}>登录</button>
        </LoginWrapper>
      );
    } else {
      return <Redirect to='/' />
    }
    
  }
}
const mapState = (state) => ({
  loginState: state.getIn(['login', 'loginState'])
});
const mapDispatch = (dispatch) => ({
  login(account, password) {
    dispatch(actionCreators.Login(account, password))
  }
});

export default connect(mapState, mapDispatch)(Login);