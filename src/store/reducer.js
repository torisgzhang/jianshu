import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "@/components/Header/store";
import { reducer as homeReducer } from "@/pages/home/store";
import { reducer as scrollTopReducer } from "@/components/ScrollTop/store";
import { reducer as detailReducer } from "@/pages/detail/store";

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  scrollTop: scrollTopReducer,
  detail: detailReducer,
});
export default reducer;