import { combineReducers } from "redux"
import { siteReducer } from "./siteSlice/sitSlice"


const rootReducer = combineReducers({
    siteSlice:siteReducer

})


export default rootReducer