import { createStore,combineReducers, applyMiddleware } from "redux";
import mainpageReducer from "./mainpageReducer.js"

const reducers = combineReducers({
    mainpage:mainpageReducer
})

const store = createStore(reducers)

export default store;