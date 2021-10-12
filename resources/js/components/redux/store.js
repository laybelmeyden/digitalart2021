import { createStore,combineReducers } from "redux";
import adminReducer from "./adminReducer.js";
import mainpageReducer from "./mainpageReducer.js"


const reducers = combineReducers({
    mainpage:mainpageReducer,
    admin:adminReducer,
})

const store = createStore(reducers)

export default store;