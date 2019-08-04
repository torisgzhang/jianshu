import { actionTypes } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  showBackTop: false
});
export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.BACK_TO_TOP:
      return state.set("showBackTop", action.isShowTopBtn);
    default: 
      return state;
  }
}