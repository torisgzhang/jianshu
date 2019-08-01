import styled from 'styled-components';
import logoPic from '@/statics/imgs/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 58px;
  background: #fff;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, .1);
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 58px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.active {
    color: #ea6f5a;
  }
  &.fr {
    color: #969696;
  }
`
export const SearchWrappper = styled.div`
  position: relative;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align:center;
    border-radius: 15px;
    &.focused {
      background: #ccc;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 35px 0 20px;
  border: none;
  outline: none;
  background: #eee;
  font-size: 14px;
  margin: 10px 0 0 15px;
  box-sizing: border-box;
  border-radius: 19px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

export const Button = styled.a`
  width: 100px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  margin: 9px 5px 0 15px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  background-color: transparent;
  &.write-btn {
    color: #fff;
    background: #ea6f5a;
  }
`