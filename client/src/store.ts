import { combineReducers, createStore } from "redux";
import userReducer from "./redux/reducers/userReducer";
import questionReducer from "./redux/reducers/questionReducer";

const rootReducer = combineReducers({
   user: userReducer,
   question: questionReducer,
});

const store = createStore(rootReducer);

export default store;