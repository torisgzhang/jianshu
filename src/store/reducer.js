import { combineReducers } from "redux";
import { reducer as headerReducer } from "@/components/Header/store";

const reducer = combineReducers({
  header: headerReducer
});
export default reducer;