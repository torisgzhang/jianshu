import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '@/pages/login/store';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrappper,
  NavSearch,
  SearchHot,
  SearchHotTitle,
  SearchHotSwitch,
  SearchList,
  SearchItem,
  Addition,
  Button
} from './style.js';
import { Link } from 'react-router-dom';

class Header extends PureComponent {
  getHotSearchArea() {
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleClickChange
    } = this.props;
    const newList = list.toJS();
    const newItem = [];
    //maxPageNum 当最后一页数据少于10的时候避免渲染多余的dom
    const maxPageNum = (page === totalPage ? newList.length : page * 10);
    if (newList.length) {
      for (let i = (page - 1) * 10; i < maxPageNum; i++) {
        newItem.push(
          <SearchItem key={newList[i]}>{newList[i]}</SearchItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchHot
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchHotTitle>热门搜索</SearchHotTitle>
          <SearchHotSwitch onClick={() => handleClickChange(page, totalPage, this.spinIconn)}>
            <i ref={(icon) => { this.spinIconn = icon }} className="iconfont spin">&#xe606;</i>换一批
          </SearchHotSwitch>
          <SearchList>
            {newItem}
          </SearchList>
        </SearchHot>
      );
    } else {
      return null;
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur, list, loginState, userInfo, logOut } = this.props;
    return (
      <HeaderWrapper className="header-wrapper clearfix">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <Nav className="nav clearfix">
          <NavItem className="fl active">首页</NavItem>
          <NavItem className="fl"><i className="iconfont">&#xe615;</i>下载App</NavItem>
          {
            loginState ?
              <div>
                <NavItem style={{ cursor: 'pointer' }} className="fr">{userInfo.get('userName')}</NavItem>
                <NavItem style={{ cursor: 'pointer' }} className="fr">
                  <img src={userInfo.get('userIcon')} style={{ width: 58, height: 58, borderRadius: 58 }} alt=""/>
                </NavItem>
                <NavItem style={{ cursor: 'pointer' }} onClick={logOut} className="fr">退出登录</NavItem>
              </div> :
              <Link to="/login">
                <NavItem className="fr">登录</NavItem>
              </Link>
          }
          <NavItem className="fr">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrappper className="fl">
            <CSSTransition
              timeout={200}
              in={focused}
              classNames="slide"
            >
              <NavSearch
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
                className={focused ? 'focused' : ''}
              >
              </NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
            >&#xe69d;</i>
            {this.getHotSearchArea()}
          </SearchWrappper>
        </Nav>
        <Addition className="fr">
          <Button className="fl sign-up">注册</Button>
          <Link to='/write'>
            <Button className="fl write-btn">
              <i className="iconfont" style={{ marginRight: 10 }}>&#xe61c;</i>
              写文章
            </Button>
          </Link>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //下面两种方等价的  state.getIn([a, b])表示获取a模块（store）里面的b这个值
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    loginState: state.getIn(['login', 'loginState']),
    userInfo: state.getIn(['login', 'userInfo']),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) { //这个list是fromJS转换后的immutable对象 里面的size表示长度
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocuse());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleClickChange(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, ''); //去除所有非数字的字符
      if (originAngle) {
        originAngle = parseInt(originAngle);
      } else {
        originAngle = 0;
      }
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logOut() {
      dispatch(loginActionCreators.Logout());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);