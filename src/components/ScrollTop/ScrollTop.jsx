import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

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
    const { page, clickToTop } = this.props;
    return (
      <div onClick={() => clickToTop(page)} style={style}>{page}</div>
    );
  }
}
const mapState = (state) => ({
  page: state.getIn(['header', "page"])
});
const mapDispatch = (dispatch) => ({
  clickToTop(page) {
    console.log(page)
  }
});
export default connect(mapState, mapDispatch)(ScrollTop);