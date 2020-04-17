import { combineReducers } from 'redux'
import auth from "./auth";
import qustions from './qustions'
export default combineReducers({
    auth,
    qustions,
})