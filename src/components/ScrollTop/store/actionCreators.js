import { actionTypes }  from './index';

export const backToTop = (isShowTopBtn) => ({
  type: actionTypes.BACK_TO_TOP,
  isShowTopBtn
});
