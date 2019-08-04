import { actionTypes } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  detailData: {
    title: '',
    content: ''
  }
});
export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_DETAIL_DATA:
      return state.merge({
        detailData: fromJS(action.detailData),
      });
    default: 
      return state;
  }
}