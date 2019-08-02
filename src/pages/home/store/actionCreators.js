import { actionTypes }  from './index';
import axios from 'axios';
import { fromJS } from "immutable";

const getHomeDataAction = (data) => ({
  type: actionTypes.GET_HOME_DATA,
  topicList: data.topicList,
  articleList: data.articleList
});

const loadHomeDataMoreAction = (data, page) => ({
  type: actionTypes.ADD_LIST,
  articleList: fromJS(data),
  listPage: page
});

export const getHomeData = () =>  {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const data = res.data.data;
      dispatch(getHomeDataAction(data));
    }).catch(() => {
      console.log('error')
    })
  }
}

export const loadHomeMore = (page) =>  {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const data = res.data.data;
      dispatch(loadHomeDataMoreAction(data, page + 1));
    }).catch(() => {
      console.log('error')
    })
  }
}