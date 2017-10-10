import { combineReducers } from 'redux'
import * as types from '../actions/constants'
import { reducer as form } from 'redux-form'

const trackConfig = (state = {}, { type, payload }) => {
	return state
}

export default combineReducers({
	form,
	trackConfig
})