import {ChangeLogInState} from "./reducers/reducer";
import { combineReducers } from "redux";
import { createStore } from "redux";

const rootReducer = combineReducers({
    ChangeLogInState
});


const store = createStore(rootReducer);

export default store;