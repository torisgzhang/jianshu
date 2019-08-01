import { actionTypes }  from './index';
import axios from 'axios';
import { fromJS } from 'immutable';

const getListAction = (data) => ({
  type: actionTypes.GET_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const searchFocuse = () => ({
  type: actionTypes.SEARCH_FOCUSE
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
});

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})
export const getList = () =>  {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data.data;
      dispatch(getListAction(data));
    }).catch(() => {
      console.log('error')
    })
  }
}