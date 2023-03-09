import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import drawMapReducer from './drawMap';
import cellNumberMapReducer from './cellNumberMap';
import dataMapReducer from "./dataMap";
import somadhanMapReducer from "./somadhanChhok";
import currentURIPathReducer from "./currentURIPath";
import createUserProfileReducer from "./createUserProfile";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    drawMap: drawMapReducer,
    cellNumberMap: cellNumberMapReducer,
    dataMap: dataMapReducer,
    somadhanMap: somadhanMapReducer,
    currentURIPath: currentURIPathReducer,
    userProfile: createUserProfileReducer
})

export default allReducers;