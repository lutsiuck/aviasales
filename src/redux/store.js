import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import ticketsReducer from "./tikets-reducer";

let reducers = combineReducers({
    ticketsAPI: ticketsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store