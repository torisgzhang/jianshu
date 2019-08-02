import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  TopicWrapper,
  TopicItem
} from './style';

class Topic extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {
          list.map((item) => {
            return (
              <TopicItem key={item.get("id")}>
                <img className="img" src={item.get("imgUrl")} alt=""/>
                <span className="info">{item.get("info")}</span>
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    );
  }
}
const mapState = (state) => {
  return {
    list: state.getIn(["home", "list"])
  }
}

export default connect(mapState, null)(Topic);