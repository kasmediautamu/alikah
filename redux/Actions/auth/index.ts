import { ActionTypes } from "../../Types/types"
export const signIn = (userId) => {
  return {
    type: ActionTypes.SIGN_IN,
    payload:userId
  }
}

export const signOut = () => {
  return {
    type: ActionTypes.SIGN_OUT
  }

}
