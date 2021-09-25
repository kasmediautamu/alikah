import Cookies from 'js-cookie'
import { ActionTypes } from "../../Types/types"
type USERINFO = {
 userInfo:any
}

export interface SIGN_IN {
  readonly type: "SIGN_IN"
  payload:USERINFO
}
export interface SIGN_OUT {
  readonly type: "SIGN_OUT"
}

const INITIAL_STATE = { //debug JSON.stringify
  userInfo: Cookies.get('userInfo') ? ((Cookies.get('userInfo'))) : null
}

export const AuthSigninReducer =  (state = INITIAL_STATE, action: SIGN_IN) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return { ...state, userInfo: action.payload }

  default:
  return state
  }
}
export const AuthSignoutReducer =  (state = INITIAL_STATE, action: SIGN_OUT) => {
  switch (action.type) {
    case ActionTypes.SIGN_OUT:
      return { ...state, userInfo:null }

  default:
  return state
  }
}
