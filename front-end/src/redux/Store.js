import {applyMiddleware,combineReducers,createStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import employeeReducer from './reducers'
const rootReducer=combineReducers({
    employeeReducer
})
export const Store=createStore(rootReducer,applyMiddleware(thunk))