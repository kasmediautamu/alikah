import { combineReducers } from 'redux'
import { AuthSigninReducer, AuthSignoutReducer } from './auth'



// COMBINED REDUCERS
const reducers = {
  sign_in: AuthSigninReducer,
  sign_out: AuthSignoutReducer

}

export default combineReducers(reducers)
