import { actionTypes } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  list: [],
  articleList: [],
  listPage: 1
});
export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_HOME_DATA:
      return state.merge({
        list: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
      })
    case actionTypes.ADD_LIST:
        return state.merge({
          listPage: action.listPage,
          articleList: state.get('articleList').concat(action.articleList)
        })
    default: 
      return state;
  }
}