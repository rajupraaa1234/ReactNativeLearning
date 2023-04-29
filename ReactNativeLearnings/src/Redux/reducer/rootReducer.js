import { combineReducers } from "redux";
import { getUserReducer } from "./userReducer";

const rootReducer = combineReducers({
    getUserReducer,
});

export default rootReducer;
