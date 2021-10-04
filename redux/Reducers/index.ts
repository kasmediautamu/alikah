import { combineReducers } from 'redux'
import { AuthSigninReducer, AuthSignoutReducer, setNavReducer } from './auth'



// COMBINED REDUCERS
const reducers = {
  sign_in: AuthSigninReducer,
  sign_out: AuthSignoutReducer,
  set_nav: setNavReducer
}

export default combineReducers(reducers)
