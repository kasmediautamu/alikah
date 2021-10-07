import { combineReducers } from 'redux'
import { AuthSigninReducer, AuthSignoutReducer, setNavReducer } from './auth'
import {AllAdvertsReducer, SingleAdvertReducer} from './Adverts'



// COMBINED REDUCERS
const reducers = {
  sign_in: AuthSigninReducer,
  sign_out: AuthSignoutReducer,
  set_nav: setNavReducer,
  alladverts:AllAdvertsReducer,
  singleadvert:SingleAdvertReducer
}

export default combineReducers(reducers)
