import { combineReducers } from 'redux'

import customers from "./customers";
import transactions from "./transactions"

export default combineReducers({
    customers,
    transactions,

})