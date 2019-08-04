import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store'

class Detail extends Component {
  render() {
    const { detailData } = this.props;
    return (
      <div>
        <h3>{detailData.get("title")}</h3>
        <main>
          {detailData.get("content")}
        </main>
      </div>
    );
  }
  componentDidMount() {
    this.props.getDetailData(this.props.match.params.id);
  }
}
const mapState = (state) => ({
  detailData: state.getIn(["detail", "detailData"])
})
const mapDispatch = (dispatch) => ({
  getDetailData(id) {
    dispatch(actionCreators.getDetailData(id));
  }
})
export default connect(mapState, mapDispatch)(Detail);