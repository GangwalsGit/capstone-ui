import { combineReducers } from 'redux'
import { loginCoachReducer } from './loginCoachReducer'
import { loginUserReducer } from './loginUserReducer'

const rootReducer = combineReducers({
    loginCoachReducer,
    loginUserReducer
})

export default rootReducer;