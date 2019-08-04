import { actionTypes }  from './index';
import axios from 'axios';
import { fromJS } from "immutable";

const detailAction = (data) => ({
  type: actionTypes.GET_DETAIL_DATA,
  detailData: fromJS(data),
});

export const getDetailData = (id) =>  {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const data = res.data.data;
      dispatch(detailAction(data));
    }).catch(() => {
      console.log('error')
    })
  }
}