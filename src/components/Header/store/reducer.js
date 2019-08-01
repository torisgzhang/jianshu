import { actionTypes } from './index';

const defaultState = {
  focused: false
};
export default (state = defaultState, action) => {
  if(action.type === actionTypes.SEARCH_FOCUSE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = true;
    return newState;
  }
  if(action.type === actionTypes.SEARCH_BLUR) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = false;
    return newState;
  }
  return state;
}