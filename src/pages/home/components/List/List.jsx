import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {
  ListItem,
  LoadMore
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/index'

class List extends PureComponent {
  render() {
    const { handleLoadMore, listPage } = this.props;
    return (
      <div>
        {
          this.props.articleList.map((item, index) => {
            return ( 
              <Link to={"/detail/" + item.get('id')} key={index} >
                <ListItem className="clearfix">
                  <div style={{width: 300}} className="text-info fl">
                    <h3 className="title">{item.get("title")}</h3>
                    <p className="abstract">{item.get("desc")}</p>
                  </div>
                  <img className="fr" style={{width: 150, height: 100, borderRadius: 10}} src={item.get("imgUrl")} alt=""/>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => handleLoadMore(listPage)}>加载更多</LoadMore>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    articleList: state.getIn(["home", "articleList"]),
    listPage:  state.getIn(["home", "listPage"])
  }
}
const mapDispatch = (dispatch) => ({
  handleLoadMore(page) {
    dispatch(actionCreators.loadHomeMore(page));
  }
});
export default connect(mapState, mapDispatch)(List);