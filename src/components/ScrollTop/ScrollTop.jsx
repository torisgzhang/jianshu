import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class ScrollTop extends PureComponent {
  render() {
    const style = {
      width: 50,
      height: 50,
      lineHeight: "50px",
      textAlign: "center",
      cursor: "pointer",
      border: "1px solid #ddd",
      position: "fixed",
      bottom: 50,
      right: 30
    }
    const { showBackTop, clickToTop } = this.props;
    if(showBackTop) {
      return <div onClick={clickToTop.bind(this)} style={style}>Top</div>
    } else {
      return null;
    }
  }
  componentDidMount() {
    window.addEventListener('scroll' , this.destoryScroll);
  }
  destoryScroll = () => {
    let firstScreen = document.documentElement.clientHeight || document.body.clientHeight;
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop > firstScreen) {
        this.props.showTopBtn(true);
      }else{
        this.props.showTopBtn(false);
      }
  }
  componentWillUnmount() { 
    //销毁滚动事件
    //如果要移除事件addEventListener的执行函数必须使用外部函数而不能直接使用匿名函数
    window.removeEventListener('scroll', this.destoryScroll);
  }
}
const mapState = (state) => ({
  showBackTop: state.getIn(['scrollTop', "showBackTop"])
});
const mapDispatch = (dispatch) => ({
  clickToTop() {
    let scrollToTop = window.setInterval(function() {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 2);
  },
  showTopBtn(isShowTopBtn) {
    dispatch(actionCreators.backToTop(isShowTopBtn));
  }
});
export default connect(mapState, mapDispatch)(ScrollTop);