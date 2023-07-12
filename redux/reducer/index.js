import { combineReducers } from 'redux'
import { counterReducer } from './counter/reducer'
import auth from './auth'

export default combineReducers({
	counter: counterReducer,
	auth:auth
})
