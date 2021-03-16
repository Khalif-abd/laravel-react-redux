import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {logger} from "redux-logger";
import { GetAuth } from "./reducers/GetAuth";
import { GetCurrency } from "./reducers/GetCurrency";
import { Errors } from "./reducers/Errors";

const reducer = combineReducers({
    GetAuth,
    GetCurrency,
    Errors,
});
const store = createStore(reducer, applyMiddleware(thunk,logger));

export default store;
