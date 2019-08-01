import React from 'react';
import { connect } from 'react-redux';
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrappper,
  NavSearch,
  Addition,
  Button
} from './style.js';
import { CSSTransition } from 'react-transition-group';

import { actionCreators } from './store';

const Header = (props) => {
  return (
    <HeaderWrapper className="header-wrapper clearfix">
      <Logo className="logo"/>
      <Nav className="nav clearfix">
        <NavItem className="fl active">首页</NavItem>
        <NavItem className="fl"><i className="iconfont">&#xe615;</i>下载App</NavItem>
        <NavItem className="fr">登录</NavItem>
        <NavItem className="fr">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrappper className="fl">
          <CSSTransition
            timeout={200}
            in={props.focused}
            classNames="slide"
            >
            <NavSearch
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
              className={props.focused ? 'focused' : ''}
              >
            </NavSearch>
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}
          >&#xe69d;</i>
        </SearchWrappper>
      </Nav>
      <Addition className="fr">
        <Button className="fl sign-up">注册</Button>
        <Button className="fl write-btn">
          <i className="iconfont" style={{marginRight: 10}}>&#xe61c;</i>
          写文章</Button>
      </Addition>
    </HeaderWrapper>
  );
}
const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocuse());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);