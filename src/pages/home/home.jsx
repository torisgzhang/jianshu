import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';
import Topic from './components/Topic/Topic.jsx';
import List from './components/List/List.jsx';
import Recommend from './components/Recommend/Recommend.jsx';
import { actionCreators } from './store';

class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper className="clearfix">
        <HomeLeft className="fl">
          <img className="banner_img" src="//upload.jianshu.io/admin_banners/web_images/4680/f3832b8ec185f3772a31960a2494964132f29ce0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight className="fr">
          <Recommend></Recommend>
        </HomeRight>
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.getHomeData();
  }
}

const mapDispatch = (dispatch) => ({
  getHomeData() {
    dispatch(actionCreators.getHomeData());
  }
});
export default connect(null, mapDispatch)(Home);